import React, { useEffect, useState } from "react";
import MyPhotos from "./MyPhotos";
import FavoritedPosts from "./FavoritedPosts";
import ProfileInfo from "./ProfileInfo";
import "../MyProfile.css"

function MyProfile({photoLocationToMap}) {
    const [photos, setPhotos] = useState([])
    const [favorites, setFavorites] = useState([])
    const [profileInfo, setProfileInfo] = useState([])
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
            setProfileInfo(data)
            setPhotos(data[0].images)
            console.log(photos)
            console.log(profileInfo)
        })} ,[])

        const mappedProfileInfo = profileInfo.map(info => <ProfileInfo key={info.name} name={info.name} username={info.username} profilepic={info.profilepic} followers={info.followers} following={info.following} bio={info.bio} handleFavesClick={handleFavesClick} handleMyPhotosClick={handleMyPhotosClick}/>)

    useEffect(() => {
        fetch("http://localhost:3001/favorited_content")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setFavorites(data)
        })} ,[])




    return (
        <div id="my-profile">
        <div id="profile-container">
        {mappedProfileInfo}
        
        {isMyPhotos ? <MyPhotos photos={photos} photoLocationToMap={photoLocationToMap}/> : <FavoritedPosts favorites={favorites} photoLocationToMap={photoLocationToMap}/>}
        </div>
        </div>
    )
}

export default MyProfile;
