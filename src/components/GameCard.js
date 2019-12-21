import React from "react";

import PropTypes from "prop-types";

import Price from "./Price";
import Featured from "./featured"



const GameCard = ({game, tog} ) => (
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
            
        </div>
    </div>
);

GameCard.propTypes={
    game: PropTypes.shape({
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        player: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        featured: PropTypes.bool.isRequired
    }).isRequired
}

export default GameCard;