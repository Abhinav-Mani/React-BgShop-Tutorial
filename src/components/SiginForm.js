import React from "react";
import { Link } from "react-router-dom"
import InLineMessege from "./InlineErrorMessege"
import PropTypes from "prop-types"

class SignInForm extends React.Component{
    state={
        data:{
            email:"",
            password:""
        },
        err:{}
    }
    validate= data=>{
        var err={};
        if(!data.email) err.email="Cannot Be Empty!!!!";
        if(!data.password) err.password="Cannot be Empty!!!!";
        return err;
    }
    SubmitHandler=e=>{
        e.preventDefault();
        console.log(this.state)
        var err=this.validate(this.state.data)
        if(Object.keys(err).length===0)
        {
            this.props.submit(this.state.data)
            .catch(err=>this.setState({...this.state , err: err.response.data.errors}));
        }
        this.setState({...this.state,err})
    }
    EventStringChange = e =>{
        this.setState({data:{...this.state.data,[e.target.name]:e.target.value}})
    }
    render(){
        return(
            <form className="ui form" onSubmit={this.SubmitHandler}>
                <div className={!this.state.err.email ?"field":"error field"}>
                    <label htmlFor="email">email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.EventStringChange}
                        />
                    <InLineMessege content={!this.state.err.email?this.state.err.global:this.state.err.email} type="error"/>
                </div>
                <div className={!this.state.err.password ? "field":"error field"}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.EventStringChange}
                        />
                    <InLineMessege content={!this.state.err.password?this.state.err.global:this.state.err.password} type="error"/>
                </div>
                <div className="ui fluid buttons">
                    <button type="submit" className="ui primary button">Submit</button>
                    <div className="or"></div>
                    <Link to="/games" className="ui button">Cancel</Link>
                </div>
            </form>
        )
    }
}
SignInForm.propTypes={
    submit: PropTypes.func.isRequired,
}
export default SignInForm