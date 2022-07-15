import React from "react";
import "../Feed.css"; 
import "../ProfilePhoto.css"
import {useState} from "react"
import {useHistory} from "react-router-dom"

function FeedPhoto({user, favorites, setFavorites, photoLocationToMap, setCoordinates}) {


    let history = useHistory();

    function handleClickMap() {
        console.log("Clicked location")
        setCoordinates(user.coordinates)
        // photoLocationToMap(user.coordinates)
        console.log("FeedPhoto", user.coordinates)
        history.push("/map")
    
    }


    const [isLiked, setIsLiked] = useState(false)

    console.log(user.coordinates)


    console.log("USER: ", user);


    function likedtoFavorites(favoritedPhoto) {
        if (isLiked) {
            fetch("http://localhost:3001/favorited_content", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(favoritedPhoto)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFavorites([...favorites, favoritedPhoto])
                console.log("wazzzupppppp", data)
            })
            .catch(() => console.log("SOMETHINGS WRONG"))
        }
    }


    function handleClick() {
        setIsLiked(true)
    }

    likedtoFavorites(user);
        

    return (
        <div id="feed-photo-container">
           <img className="profile-images" src={user.image} alt="profile-avatar" />
           <div id="photo-details">
           <h3 className="description">{user.username}</h3>
            <h3 id="location" className="description" onClick={handleClickMap}>{user.location}</h3>
            <h3 className="description" onClick={handleClick}>{`♥ ${user.likes} likes`}</h3>
        </div>
        </div>
    )
}


export default FeedPhoto;
