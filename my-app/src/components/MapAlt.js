import React from "react"
import {useState} from "react"
import "../map.css"


function MapAlt({location, setLocation}) {

   

    return (
        <div>
            <label for="location">Let's explore</label>

            <select name="location" id="location">
            <option value="New York City">{location}</option>
            <option value="London">London</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Paris">Paris</option>
            </select>






            
        </div>

    )
}

export default MapAlt;