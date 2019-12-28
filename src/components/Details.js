import React from "react";

const Details=({ game })=>(
<div>
    <h1 className="ui center aligned divided header">{ game.title }</h1>
    <div className="ui stackable grid">
        <div className="six wide column">
            <div className="ui fluid image">
                <img src={game.image}></img>
            </div>
        </div>
        <div className="ten wide column">
            <p>
                {game.description}
            </p>
            <table className="ui table">
            <tbody>
                <tr>
                    <td>Number of Players</td>
                    <td>{game.player}</td>
                </tr>
                <tr>
                    <td>Duration</td>
                    <td>{game.time}</td>
                </tr>
            </tbody>

            </table>
                <p className="ui green huge label">{ "₹  " +game.price/100}</p>
        </div>
    </div>
    
</div>
)

export default Details