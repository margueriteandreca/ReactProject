import React from "react"
import {useState, useEffect} from "react"
import "../map.css"


function Map({location, setLocation}) {
    const [random, setRandom] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/suggestedimages")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRandom(data)
        })

    }, [])


   
        // const test= random.map(photo => {
        //     return <img src={photo.image} alt={photo.id}></img>})

    return (
        <div id= "map">
            <label for="location">Let's explore</label>

            <select name="location" id="location">
            <option value="New York City">{location}</option>
            <option value="London">London</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Paris">Paris</option>
            </select>


            {/* {test} */}






            
        </div>

    )
}

export default Map;



