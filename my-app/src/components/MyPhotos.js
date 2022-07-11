
import { findByLabelText } from "@testing-library/react";
import React from "react";
import ProfilePhoto from "./ProfilePhoto"

function MyPhotos({photos}) {


   const mappedProfilePhotos = photos.map(photo => <ProfilePhoto key={photo.id} photo={photo}/>)


    return (
        <div id="photos-container">{mappedProfilePhotos}</div>
    )
}

export default MyPhotos;