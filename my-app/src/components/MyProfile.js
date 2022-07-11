import React, { useEffect, useState } from "react";
import MyPhotos from "./MyPhotos";
import FavoritedPosts from "./FavoritedPosts";
import ProfileInfo from "./ProfileInfo";
import "../MyProfile.css"

function MyProfile() {
    const [photos, setPhotos] = useState([])
    const [isMyPhotos, setIsMyPhotos] = useState(true)

    function handleFavesClick() {
        setIsMyPhotos(isMyPhotos => false)
    }
    function handleMyPhotosClick() {
        setIsMyPhotos(isMyPhotos => true)
    }

    useEffect(() => {
        fetch("http://localhost:3001/myprofile")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPhotos(data[0].images)
            console.log(photos)
        })} ,[])



    return (
        <div id="my-profile">
        <div id="profile-container">
        <ProfileInfo handleFavesClick={handleFavesClick} handleMyPhotosClick={handleMyPhotosClick}/>
        
        {isMyPhotos ? <MyPhotos photos={photos}/> : <FavoritedPosts />}
        </div>
        </div>
    )
}

export default MyProfile;
