import React from "react";
import api from "../api";
import Details from "./Details";

class ShowGamePage extends React.Component{
    state ={
        game:{},
        loading:true
    }
    componentDidMount(){
        api.games.fetchById(this.props.match.params._id)
        .then(game=> this.setState({game,loading:false}))
    }
    render(){
        return(
            <Details game={this.state.game}></Details>

        )
    }
        

    
}

export default ShowGamePage