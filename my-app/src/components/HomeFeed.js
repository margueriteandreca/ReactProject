import React, { useEffect, useState } from "react";
import FeedPhotosContainer from "./FeedPhotosContainer";
import "../Feed.css"


function HomeFeed(favorites, setFavorites, followers, setFollowers) {
    const [feed, setFeed] = useState([])

    useEffect( () => {
    fetch("http://localhost:3001/users")
    .then(res => res.json())
    .then(data => {
        console.log("DATA:", data)
        setFeed(data)
        console.log("FEED: ", feed)
    })} ,[])

    return (
        <div id="homefeed-container">
            <FeedPhotosContainer feed={feed} favorites={favorites} setFavorites={setFavorites} followers={followers} setFollowers={setFollowers}/>
            
        </div>
    )

}

export default HomeFeed;