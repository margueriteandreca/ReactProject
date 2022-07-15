import React from "react";
import "../Feed.css";

function SuggestedFollower({name, username, image, handleClick}) {

    function handleClickFollower() {
        if (handleClick) {
        handleClick({name, username, image})
    }
}

    return (
        <div> 
            <div className="whole-follower">
                <div id="image-and-info">
                <img id="follower-image" src={image} alt={name}></img>
                <div className="follower-div"></div>
                <div className="follower-name">
                    <p id="name">{name}</p>
                    <p>{username}</p>
                </div>
                </div>
                {handleClick ? 
                <button id="add-follower" onClick={handleClickFollower}>Follow</button>
                : null}
            </div>
        </div>
    )

}

export default SuggestedFollower;