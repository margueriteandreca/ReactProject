
import { findByLabelText } from "@testing-library/react";
import React from "react";
import ProfilePhoto from "./ProfilePhoto"
import "../MyProfile.css"

function MyPhotos({photos}) {


   const mappedProfilePhotos = photos.map(photo => <ProfilePhoto key={photo.id} photo={photo}/>)


    return (
        <div className="photos-container">{mappedProfilePhotos}</div>
    )
}

export default MyPhotos;