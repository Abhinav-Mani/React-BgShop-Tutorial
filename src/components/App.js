import React from "react";
import TopNavigation from "./navigation"
import { Route } from "react-router-dom";
import Home from "./HomePage"
import GamesPage from "./GamesPage"
import ShowGame from "./ShowGamePage"
import SignUP from "./SignUpPage"
import SignIn from "./LoginPage"
import Axios from "axios";
import jwtDecode from "jwt-decode";

const Authorization = ( token= null )=>{
    if(token)
    Axios.defaults.headers.common.Authorization= `Bearer ${token}`
    else
    delete Axios.defaults.headers.common.Authorization
}

class App extends React.Component{
    state={
        user:{
            token:"",
            role:"admin"
        },
        message:""
    }
    componentDidMount(){
        if(localStorage.bgShopToken){
            this.setState({user:{role:jwtDecode(localStorage.bgShopToken).user.role,token: localStorage.bgShopToken }});
            Authorization(localStorage.bgShopToken);
        }
    }
    logout=()=>{
        this.setState({user:{role:"user",token:null}});
        localStorage.removeItem("bgShopToken");
        Authorization();
    }
    setMessage = m=> this.setState({message: m})
    login = token =>{
        this.setState({user:{token,role:jwtDecode(token).user.role}});
        localStorage.bgShopToken= token;
        Authorization(token);
    }
    render() {
        return(
            <div className="ui container">
                <TopNavigation logout={this.logout} user={this.state.user} isAuthenticated={!!this.state.user.token}/>
                {this.state.message && 
                <div className="ui info message">
                    <i className="close icon" onClick={()=>this.setMessage("")}></i>
                    {this.state.message}
                </div>}
                <Route path="/" exact component={Home} />
                <Route path="/games" user={this.state.user} render={(props)=><GamesPage user={this.state.user}/>} />
                <Route path="/game/:_id" exact component={ShowGame}/>
                <Route path="/SignUP" exact render={(props)=><SignUP setMessage={this.setMessage} {...props}/>}/>
                <Route path="/SignIn" exact render={(props)=><SignIn login={this.login} {...props} />}/>
                
            </div>
        );
    }
}
export default App;