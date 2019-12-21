import React from "react";
import GameCard from "./GameCard"
import PropTypes from "prop-types";
import Message from "./message"



const GameList =({games, tog})=>(
    <div >
        {
            games.length=== 0 ?
            (
                <Message type = { "error" }/>
            )
            :
            (
                <div className="ui cards four" >
                    {
                        games.map(game=><GameCard game={game} key={game._id} tog={tog}/>)
                    }
                </div> 
            )
        
        }

    </div>
    
    );
GameList.propTypes= {
    games: PropTypes.array.isRequired,
    tog:PropTypes.func.isRequired
}
GameList.defaultProps={
    games:[],
    tog:function(){console.log("error")}
}

export default GameList;