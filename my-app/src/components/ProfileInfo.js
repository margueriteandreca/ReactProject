import React, { useState, useEffect } from "react";
import "../MyProfile.css"


function ProfileInfo({name, username, profilepic, followers, following, bio, handleFavesClick, handleMyPhotosClick, handleClickPopUp, fetchedFollowers}) {
    

    

    return (
        <div id="info-container">
            <div id="profile-div">
                <img src={profilepic} alt={name} id="profile-pic" />
                <div id="profile-info">
                    <div id="name-only">
                        <p id="name-bold">{name}</p>
                        <p>•</p>
                        <p>{username}</p>
                    </div>
                    <div id="followers-container">
                        <span className="followers">{`${followers} followers`}</span>
                        <span id="followingspan" className="followers" onClick={handleClickPopUp}>{`${fetchedFollowers.length} following`}</span>
                    </div>
                    <p>{bio}</p>
                    </div>
                
            </div>
            <div id="buttons-div">
                <button className="profilebutton" onClick={handleMyPhotosClick}>My Photos</button>
                <button className="profilebutton" onClick={handleFavesClick}>My Faves</button>
            </div>
        </div>

    )
}

export default ProfileInfo;