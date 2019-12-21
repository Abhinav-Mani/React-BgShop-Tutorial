import React from "react";
import PropTypes from "prop-types";

const NavBar = ({show})=>(
    <div className="ui secondary pointing menu">
        <a href className="item" > BGShop </a>
        <a href className="item" onClick={show}><i className="icon plus"></i>Add New Game</a>
    </div>
)
NavBar.propTypes={
    show : PropTypes.func.isRequired
}
export default NavBar;