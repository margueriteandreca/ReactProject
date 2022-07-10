import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../icons/home.png"
import Explore from "../icons/explore.png"
import User from "../icons/user.png"


function NavBar() {

    return (
        <nav>
            This will be our navigation <br></br>
            <NavLink exact to="/"><button><img src={Home} className="nav-icon" alt="" style={{width: "30px"}}></img></button></NavLink>
            <NavLink to="/explore"><button><img src={Explore} className="nav-icon" alt="" style={{width: "30px"}}></img></button></NavLink>
            <NavLink to="/myprofile"><button><img src={User} className="nav-icon" alt="" style={{width: "30px"}}></img></button></NavLink>
        </nav>
    )
}

export default NavBar;