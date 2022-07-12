import React from "react";
import "../Feed.css"; 

function FeedPhoto({user}) {
    // const {id, image, categories} = user
    console.log(user)
    return (
        <div id="feed-photo-container">
           <img src={user.feed_image} alt="photo" />
        </div>
    )
}


export default FeedPhoto;