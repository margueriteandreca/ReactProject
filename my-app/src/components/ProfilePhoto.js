import { findByLabelText } from "@testing-library/react";
import React from "react";
import "../ProfilePhoto.css"

function ProfilePhoto({photo}) {

    
    console.log(photo)
    return (
        <div className="photo-div">
        <img className="profile-images" src={photo.image} alt="test"/>
        </div>
    )
}

export default ProfilePhoto;