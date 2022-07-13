import { findByLabelText } from "@testing-library/react";
import React from "react";
import {useHistory} from "react-router-dom"
import "../ProfilePhoto.css"

function ProfilePhoto({photo, photoLocationToMap}) {
    console.log(photo)

    let history = useHistory();

    function handleClick() {
        console.log("Clicked location")
        // photoLocationToMap(photo.location)
        photoLocationToMap(photo.coordinates)
        history.push("/map")
        
    
    }

    return (
        <div className="photo-div">
                <img className="profile-images" src={photo.image} alt="test"/>
                <div className="photo-details">
                    <h3 className="description">{photo.username}</h3>
                    <h3 id="location" className="description" onClick={handleClick}>{photo.location}</h3>
                    <h3 className="description">{`♥ ${photo.likes} likes`}</h3>
                    

                </div>
        </div>
    )
}

export default ProfilePhoto;