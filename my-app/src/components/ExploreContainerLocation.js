
import React from "react";
import "../Explore.css";
import ProfilePhoto from "./ProfilePhoto";
import {useState} from "react"


function ExploreContainerLocation({suggestions}) {
    const [location, setLocation] = useState("New York City")

    console.log(suggestions)
    // suggestions.forEach(suggestion => console.log("LOCATION!!!!!!!!!!", suggestion.location))


    function handleChange(e) {
        setLocation(e.target.value)
        console.log(location)
    }
    const filteredSuggestions = suggestions.filter(suggestion => suggestion.location === location)

    return (
        <div>

             <label for="location-select">Let's explore</label>

            <select name="location-select" id="location-select" value={location} onChange={(e) => handleChange(e)}>
                <option value="New York City">New York City</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Paris">Paris</option>
            </select>
            <div className="favBoxesContainer ">
            {filteredSuggestions.map(suggestion => <ProfilePhoto key={suggestion.id} photo={suggestion} /> )}
            </div>

        </div>
    )

}


export default ExploreContainerLocation;