
import React from "react"
import { useHistory } from "react-router-dom"


function ExplorePhoto({fav, photoLocationToMap}) {

    console.log(fav)

    let history = useHistory();

    function handleClick() {
        console.log("Clicked location")
        // photoLocationToMap(photo.location)
        photoLocationToMap(fav.coordinates)
        history.push("/map")
        

    }
    

    return (
        <div className='fav-image-container'>
            <img className="favImg" src={fav.image} alt='One of your favorited photos.' />
            <div className='photoDetails'>
                <h3>{fav.username}</h3>
                <h3 id="location" className="description" onClick={handleClick}>{fav.location}</h3>
                {/* {fav.categories.map((cat) => {
                    return <h5>{cat.toUpperCase()}</h5>
                })} */}
            </div>
        </div>

    )
}

export default ExplorePhoto;