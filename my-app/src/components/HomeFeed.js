import React, { useEffect, useState } from "react";
import FeedPhotosContainer from "./FeedPhotosContainer";
import "../Feed.css"


function HomeFeed() {
    const [feed, setFeed] = useState([])

    useEffect( () => {
    fetch("http://localhost:3001/users")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setFeed(data)
        console.log(feed)
    })} ,[])

    return (
        <div id="homefeed-container">
            <FeedPhotosContainer feed={feed}/>
            
        </div>
    )

}

export default HomeFeed;