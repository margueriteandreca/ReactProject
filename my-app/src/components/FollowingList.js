import React from "react"
import SuggestedFollower from "./SuggestedFollower"
import "../MyProfile.css"

function FollowingList({fetchedFollowers}) {
    return (
        <div id="followers-container-pop-up">
            {fetchedFollowers.map(follower => 
            <div id="follower-padding">
                <SuggestedFollower name={follower.name} image={follower.image} username={follower.username}/>
            </div>)}

        </div>
    )
}

export default FollowingList;