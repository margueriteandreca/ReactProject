
import React, { useState, useEffect } from 'react';
import '../Explore.css'

function Explore() {

    const [favData, setFavData] = useState([]);
    const [view, setView] = useState('favorites');

    useEffect(() => {
        fetch(`http://localhost:3001/favorited_content`)
        .then((r) => r.json())
        .then((data) => setFavData(data))
    }, []);

    const displayFavImage = favData.map((fav) => <img key={fav.id} className="favImg" src={fav.image} alt='One of your favorited photos.' />)

    const displayFavData = favData.map((fav) => {
        return (
            <div className='fav-image-container'>
                <img key={fav.id} className="favImg" src={fav.image} alt='One of your favorited photos.' />
                <div className='photoDetails'>
                <h2>{fav.name}</h2>
                <h3>{fav.location}</h3>
                {fav.catgories.map((cat) => {
                    return <h5>{cat.toUpperCase()}</h5>
                })}
                </div>
            </div>
        );
    });

    return (
        <>
            <div className='btnContainer'>
                <button className='navBtn' onClick={() => setView('favorites')}>Favorites</button>
                <button className='navBtn' onClick={() => setView('locations')}>Locations</button>
            </div>
            <div className='favBoxesContainer' >
                {displayFavData}
            </div>
        </>
        )
};

export default Explore; 