import React from "react";

import PropTypes from "prop-types";

import Price from "./Price";
import Featured from "./featured"
import { Link } from "react-router-dom";
class GameCard extends React.Component{
    state={
        confirm:false
    }
    showconfirmaton=()=>this.setState({confirm:true})
    hideconfirmaton=()=>this.setState({confirm:false})
    render(){
        const {game, tog, editGame, deleteGame, user} =this.props;
        const adminContent=(
            <div className="extra content">
                
                    {
                        this.state.confirm?(
                            <div className="ui two buttons">
                            <a className="ui basic green button" onClick={()=>deleteGame(game)} >YES</a>
                            <a className="ui basic red button" onClick={this.hideconfirmaton}>NO</a>
                            </div>                         

                        ):(
                            <div className="ui two buttons">
                            <Link className="ui basic green button" to={`/games/edit/${game._id}`}><i className="ui icon edit"></i></Link>
                            <a className="ui basic red button" onClick={this.showconfirmaton}><i className="ui icon trash"></i></a>
                            </div>
                        )
                    }
                    
                
            </div>
        );
        const addtoCart=(<div className="extra content">
            <a className="ui green basic button">Add to Cart</a>

        </div>)
        return(
            <div className="ui card" >
        <div className="image">
            <Featured Featured={game.featured} tog={tog} gameid={game._id}/>
            <Price price={game.price}/>
            <img src={game.image }></img>
        </div>
        <div className="content">
        <Link to={`/game/${game._id}`} className="header">{ game.title }</Link>
            <div className="meata">
                <i className="icon users"></i>{ game.player } &nbsp;
                <i className="icon wait"></i>{ game.time } min
            </div>
        { user.token &&user.role==="admin" && adminContent}
        { user.token &&user.role==="user" && addtoCart}
            
            
        </div>
    </div>

        )
    }
}
// const GameCard = () => (
    
// );

GameCard.propTypes={
    game: PropTypes.shape({
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        player: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        featured: PropTypes.bool.isRequired
    }).isRequired,
    deleteGame:PropTypes.func.isRequired,
    user: PropTypes.shape({
        token: PropTypes.string,
        role: PropTypes.string.isRequired
    }).isRequired
}

export default GameCard;