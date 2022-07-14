import React from "react";
import {useState, useEffect} from "react"
import "../SearchBar.css"


function SearchBar({handleSubmit}) {
    const [search, setSearch] = useState("")
    const [followers, setFollowers] = useState([])
    const [filteredData, setFilteredData] = useState([])



    useEffect(() => {
        fetch("http://localhost:3001/suggestedfollowers")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setFollowers(data)
        })

    }, [])

    console.log(followers.name)

    const filteredFollowers = followers.filter(follower => follower.name.toLowerCase().includes(search.toLowerCase()))
    const dropDown = filteredFollowers.map(follower => {
        return (
            <p>{follower.name} {follower.username}</p>
        )
    })
    

    function handleSubmit() {
        console.log("hehe")
    }

    function handleOnChange(e){
        setSearch(e.target.value)
        console.log(search)
    }

    return(
        <form className="search-bar" onSubmit={handleSubmit}>
            <div className="searchBAR">
                <div className="searchInputs">
                    <input type="text" id="search" placeholder="find traveler" value={search} onChange={handleOnChange}/>
                    <input type="submit"></input>
                </div>
                <div className="dropdown-results">
                    {search === "" ? null: dropDown}

                </div>


            </div>
            

        </form>
    )
}

export default SearchBar;