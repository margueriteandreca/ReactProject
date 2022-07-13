
import React from "react"


function ExplorePhoto({fav}) {

    console.log(fav)
    

    return (
        <div className='fav-image-container'>
            <img className="favImg" src={fav.image} alt='One of your favorited photos.' />
            <div className='photoDetails'>
                <h2>{fav.username}</h2>
                <h3>{fav.location}</h3>
                {fav.categories.map((cat) => {
                    return <h5>{cat.toUpperCase()}</h5>
                })}
            </div>
        </div>

    )
}

export default ExplorePhoto;