import React from "react";
import "../MyProfile.css"


function ProfileInfo({handleFavesClick, handleMyPhotosClick}) {
    return (
        <div>
        <div id="buttons-div">
        <button className="profilebutton" onClick={handleMyPhotosClick}>My Photos</button>
        <button className="profilebutton" onClick={handleFavesClick}>My Faves</button>
        </div>
        </div>

    )
}

export default ProfileInfo;