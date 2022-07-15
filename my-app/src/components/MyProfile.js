import React, { useEffect, useState } from "react";
import MyPhotos from "./MyPhotos";
import FavoritedPosts from "./FavoritedPosts";
import ProfileInfo from "./ProfileInfo";
import FollowingList from "./FollowingList";
import "../MyProfile.css"

function MyProfile({photoLocationToMap, favorites, setFavorites}) {
    const [photos, setPhotos] = useState([])
    const [profileInfo, setProfileInfo] = useState([])
    const [isMyPhotos, setIsMyPhotos] = useState(true)
    const [isDisplayingFollowers, setIsDisplayingFollowers] = useState(false)
    const [fetchedFollowers, setFetchedFollowers] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/following")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setFetchedFollowers(data)
        })

    } ,[])


    function handleClickPopUp() {
        setIsDisplayingFollowers(isDisplayingFollowers => !isDisplayingFollowers)
    }

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



    const mappedProfileInfo = profileInfo.map(info => <ProfileInfo key={info.name} name={info.name} username={info.username} profilepic={info.profilepic} followers={info.followers} following={info.following} bio={info.bio} handleFavesClick={handleFavesClick} handleMyPhotosClick={handleMyPhotosClick} handleClickPopUp={handleClickPopUp} fetchedFollowers={fetchedFollowers}/>)

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
        {isDisplayingFollowers? 
        <>  
        <div id="pop-up-background">
        </div>
        <div id="pop-up">
            <div id="pop-up-top">
                <h4>Currently following:</h4>
                <button id="pop-up-close" onClick={handleClickPopUp}>X</button>
            </div>
            <div id="inner-pop-up">
                <FollowingList fetchedFollowers={fetchedFollowers}/>
            </div>
        </div>
        </> : null}

        </div>
    )
}

export default MyProfile;
