// eslint-disable-next-line
import { findByLabelText } from "@testing-library/react";
import React from "react";
import ProfilePhoto from "./ProfilePhoto"
import "../MyProfile.css"

function MyPhotos({photos, photoLocationToMap}) {


   const mappedProfilePhotos = photos.map(photo => <ProfilePhoto key={photo.id} photo={photo} photoLocationToMap={photoLocationToMap}/>)


    return (
        <div className="photos-container">{mappedProfilePhotos}</div>
    )
}

export default MyPhotos;