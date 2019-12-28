import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom"

const NavBar = ({logout, isAuthenticated, user})=>(
    <div className="ui secondary pointing menu">
        <NavLink to="/" exact className="item" > BGShop </NavLink>
        <NavLink to="/games/" exact className="item"  >Games</NavLink>
        {user.token&&user.role==="admin"&& 
        <NavLink to="/games/new" exact className="item" ><i className="icon plus"></i>Add New Game</NavLink>}
        {
            isAuthenticated ? (
                <div className="right menu">
                    <Link to="/games" exact className="item" onClick={logout}> LogOut </Link>
                </div>
            ):
            (
                <div className="right menu">
                    <NavLink to="/SignUP" className="item" > SignUp </NavLink>
                    <NavLink to="/SignIn" className="item" > SignIn </NavLink>
                </div>
            )
        }
    </div>
)
 NavBar.propTypes={
    isAuthenticated : PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    user: PropTypes.shape({
        token: PropTypes.string,
        role: PropTypes.string.isRequired
    }).isRequired
 }
export default NavBar;