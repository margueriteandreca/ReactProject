import { findByLabelText } from "@testing-library/react";
import React from "react";
import "../ProfilePhoto.css"

function ProfilePhoto({photo}) {
    const imageStyle = {
        width: 300,
        height: 300
    }

    
    console.log(photo)
    return (
        <div className="photo-div">
        <img className="profile-images" src={photo.image} alt="test" style={imageStyle}/>
        </div>
    )
}

export default ProfilePhoto;