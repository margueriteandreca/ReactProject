import React, { useEffect, useState } from "react";


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
        <div>
            This is the feed with users' photos 
        </div>
    )

}

export default HomeFeed;