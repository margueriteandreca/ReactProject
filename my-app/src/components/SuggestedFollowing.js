import React from "react";
import "../Feed.css"
import SearchBar from "./SearchBar";
import SuggestedFollower from "./SuggestedFollower";


function SuggestedFollowing({}) {

 
    return (
        <div id="suggested-container">
            <SuggestedFollower/>
            <SearchBar />
        </div>
    )
}

export default SuggestedFollowing;