
import React from "react";
import ExplorePhoto from "./ExplorePhoto";
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

             <label for="location">Let's explore</label>

            <select name="location" id="location" value={location} onChange={(e) => handleChange(e)}>
                <option value="New York City">New York City</option>
                <option value="London">London</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Paris">Paris</option>
            </select>

            {filteredSuggestions.map(suggestion => <ExplorePhoto key={suggestion.id} image={suggestion.image} username={suggestion.username} location={suggestion.location} coordinates={suggestion.coordinates} /> )}

        </div>
    )

}


export default ExploreContainerLocation;