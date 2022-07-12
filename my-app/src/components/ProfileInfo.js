import React from "react";
import "../MyProfile.css"


function ProfileInfo({name, username, profilepic, followers, following, bio, handleFavesClick, handleMyPhotosClick}) {

    console.log(followers, following)

 
    

    return (
        <div id="info-container">
            <div id="profile-div">
                <img src={profilepic} alt={name} id="profile-pic" />
                <p>{name}</p>
                <p>{username}</p>
                <div id="followers-container">
                    <span className="followers">{`${followers} followers`}</span>
                    <span className="followers">{`${following} following`}</span>
                </div>
                    <p>{bio}</p>
                


            </div>
            <div id="buttons-div">
                <button className="profilebutton" onClick={handleMyPhotosClick}>My Photos</button>
                <button className="profilebutton" onClick={handleFavesClick}>My Faves</button>
            </div>
        </div>

    )
}

export default ProfileInfo;