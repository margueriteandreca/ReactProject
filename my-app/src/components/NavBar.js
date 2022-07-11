import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../icons/home.png"
import Explore from "../icons/explore.png"
import User from "../icons/user.png"
import "../Nav.css"


function NavBar() {

    return (
        <nav id="nav-bar">
            <NavLink exact to="/" className="nav-buttons"><button><img src={Home} className="nav-icon" alt="" style={{width: "30px"}}></img></button></NavLink>
            <NavLink to="/explore" className="nav-buttons"><button><img src={Explore} className="nav-icon" alt="" style={{width: "30px"}}></img></button></NavLink>
            <NavLink to="/myprofile" className="nav-buttons"><button><img src={User} className="nav-icon" alt="" style={{width: "30px"}}></img></button></NavLink>
        </nav>
    )
}

export default NavBar;