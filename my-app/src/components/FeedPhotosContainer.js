import React from "react";
import FeedPhoto from "./FeedPhoto";
import SuggestedFollowing from "./SuggestedFollowing";
import "../Feed.css"

function FeedPhotosContainer({feed}) {

    console.log(feed)
    const mappedFeedPhotos = feed.map(user => <FeedPhoto key={user.id} user={user}/>)


    return (
        <div id="feed-container">
            <div id="images-container">
           {mappedFeedPhotos}
           </div>
           <SuggestedFollowing />
        </div>
    )
}

export default FeedPhotosContainer;