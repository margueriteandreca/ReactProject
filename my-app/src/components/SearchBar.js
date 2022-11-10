import React from "react";
import {useState, useEffect} from "react"
import "../SearchBar.css"
import SuggestedFollower from "./SuggestedFollower";


function SearchBar({followers, handleClick}) {
    const [search, setSearch] = useState("")




    const filteredFollowers = followers.filter(follower => follower.name.toLowerCase().includes(search.toLowerCase())).slice(0, 5)

    const dropDown = filteredFollowers.map(follower => {
        return (
            <SuggestedFollower key={follower.name} name={follower.name} username={follower.username} image={follower.image} follower={follower} handleClick={handleClick}/>
        )
    })
    


    function handleOnChange(e){
        setSearch(e.target.value)
    }

    return(
        <form className="search-bar">
            <div>
                <div className="search-input">
                    <input type="text" id="search" placeholder="find traveler" value={search} onChange={handleOnChange}/>
                </div>
                <div className="dropdown-results">
                    {search === "" ? null: dropDown}

                </div>


            </div>
            

        </form>
    )
}

export default SearchBar;