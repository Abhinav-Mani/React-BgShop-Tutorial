import React from "react";

import PropTypes from "prop-types";

import Price from "./Price";
import Featured from "./featured"
class GameCard extends React.Component{
    state={
        confirm:false
    }
    showconfirmaton=()=>this.setState({confirm:true})
    hideconfirmaton=()=>this.setState({confirm:false})
    render(){
        const {game, tog, editGame, deleteGame} =this.props;
        return(
            <div className="ui card" >
        <div className="image">
            <Featured Featured={game.featured} tog={tog} gameid={game._id}/>
            <Price price={game.price}/>
            <img src={game.image }></img>
        </div>
        <div className="content">
        <a className="header">{ game.title }</a>
            <div className="meata">
                <i className="icon users"></i>{ game.player } &nbsp;
                <i className="icon wait"></i>{ game.time } min
            </div>
            <div className="extra content">
                
                    {
                        this.state.confirm?(
                            <div className="ui two buttons">
                            <a className="ui basic green button" onClick={()=>deleteGame(game)} >YES</a>
                            <a className="ui basic red button" onClick={this.hideconfirmaton}>NO</a>
                            </div>                         

                        ):(
                            <div className="ui two buttons">
                            <a className="ui basic green button" onClick={()=>editGame(game)}><i className="ui icon edit"></i></a>
                            <a className="ui basic red button" onClick={this.showconfirmaton}><i className="ui icon trash"></i></a>
                            </div>
                        )
                    }
                    
                
            </div>
            
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
    editGame:PropTypes.func.isRequired,
    deleteGame:PropTypes.func.isRequired
}

export default GameCard;