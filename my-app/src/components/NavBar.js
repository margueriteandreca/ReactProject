import React from "react";
import Home from "../icons/home.png"
import Explore from "../icons/explore.png"
import User from "../icons/user.png"

function NavBar() {
    return (
        <div>
            This will be our navigation <br></br>
            <button><img src={Home} className="nav-icon" style={{width: "30px"}}></img></button> 
            <button className="nav-icon"><img src={Explore} className="nav-icon" style={{width: "30px"}}></img></button>
            <button className="nav-icon"><img src={User} className="nav-icon" style={{width: "30px"}}></img></button>
        </div>
    )
}

export default NavBar;