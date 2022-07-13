import React, { useMemo } from "react"
import {useState, useEffect} from "react"
// eslint-disable-next-line
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"
import "../map.css"

// eslint-disable-next-line
function Map({location, setLocation, coordinates, setCoordinates}) {
    // eslint-disable-next-line
    const [random, setRandom] = useState([])
    // eslint-disable-next-line
    const center = useMemo(() => ({lat: 44, lng: -80}), []);

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
        {/* //     <label for="location">Let's explore</label>

        //     <select name="location" id="location">
        //     <option value="New York City">{location}</option>
        //     <option value="London">London</option>
        //     <option value="Rio de Janeiro">Rio de Janeiro</option>
        //     <option value="Paris">Paris</option>
        //     </select>


        //     {test} */}

        
        <GoogleMap zoom={10} center={coordinates} mapContainerClassName="map-container">
        <Marker position={coordinates}/>

        </GoogleMap>
      






            
        </div>

    )
}

export default Map;



