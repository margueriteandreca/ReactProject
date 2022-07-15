import React, { useMemo } from "react"
import {useState, useEffect} from "react"
// eslint-disable-next-line
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"
import "../map.css"

// eslint-disable-next-line
function Map({location, setLocation, coordinates, setCoordinates}) {
    const [random, setRandom] = useState([])
    const center = useMemo(() => ({lat: 44, lng: -80}), []);

    useEffect(() => {
        fetch("http://localhost:3001/suggestedimages")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRandom(data)
        })

    }, [])


    return (
        <div id= "map">

        <GoogleMap zoom={10} center={coordinates} mapContainerClassName="map-container">
            
        <Marker position={coordinates}/>

        </GoogleMap>
      
            
        </div>

    )
}

export default Map;



