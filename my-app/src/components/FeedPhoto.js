import React from "react";
import "../Feed.css"; 
import "../ProfilePhoto.css"
import {useState} from "react"

function FeedPhoto({user, favorites, setFavorites}) {
    const [isLiked, setIsLiked] = useState(false)


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
        
    

    // function settingGlobalLike() {
    //     savingLike(isLiked)
    //     // likedtoFavorites(user)

    // }

    // const {id, image, categories} = user
    //console.log(user)
    return (
        <div id="feed-photo-container">
           <img className="profile-images" src={user.image} alt="photo" />
           <h3 className="description">{user.username}</h3>
            <h3 id="location" className="description">{user.location}</h3>
            <h3 className="description" onClick={handleClick}>{`♥ ${user.likes} likes`}</h3>
        </div>
    )
}


export default FeedPhoto;
