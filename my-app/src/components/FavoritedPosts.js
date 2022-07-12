import React from "react";
import ProfilePhoto from "./ProfilePhoto";
// import MyProfile from "./MyProfile";

function FavoritedPosts({favorites}) {
    console.log(favorites)

    const mappedFavoritedPhotos = favorites.map(photo => <ProfilePhoto key={photo.id} photo={photo}/>)

    return (
        <div className="photos-container">
            {mappedFavoritedPhotos}
        </div>
    )
}

export default FavoritedPosts;