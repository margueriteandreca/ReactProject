
import React from "react"
import { useHistory } from "react-router-dom"


function ExplorePhoto({image, username, location, coordinates, photoLocationToMap}) {


    let history = useHistory();

    function handleClick() {
        console.log("Clicked location")
        // photoLocationToMap(photo.location)
        photoLocationToMap(coordinates)
        history.push("/map")
        

    }


    return (
        <div className='fav-image-container'>
            <img className="favImg" src={image} alt='One of your favorited photos.' />
            <div className='photoDetails'>
                <h3>{username}</h3>
                <h3 id="location" className="description" onClick={handleClick}>{location}</h3>
            </div>
        </div>

    )
}

export default ExplorePhoto;