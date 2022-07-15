import React from "react";
import "../Feed.css"
import SearchBar from "./SearchBar";
import SuggestedFollower from "./SuggestedFollower";
import {useState, useEffect} from "react"


function SuggestedFollowing({}) {
    const [followers, setFollowers] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/suggestedfollowers")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setFollowers(data)
        })

    }, [])

    function handleClick(newFollower) {
        fetch(`http://localhost:3001/following`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(newFollower)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

 
    return (
        <div id="suggested-container">
            <h4>Try following:</h4>
            <div id="followers-add-padding">
            {followers.slice(0, 5).map(follower => <SuggestedFollower key={follower.id} name={follower.name} username={follower.username} image={follower.image} handleClick={handleClick}/>)}
            </div>
            <SearchBar followers={followers} setFollowers={setFollowers} handleClick={handleClick}/>
            
        </div>
    )
}

export default SuggestedFollowing;