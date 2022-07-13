
import React, { useState, useEffect } from 'react';
import ExplorePhoto from './ExplorePhoto';
import '../Explore.css'

function Explore({photoLocationToMap}) {

    const [favData, setFavData] = useState([]);
    const [view, setView] = useState('favorites');

    useEffect(() => {
        fetch(`http://localhost:3001/favorited_content`)
        .then((r) => r.json())
        .then((data) => setFavData(data))
    }, []);

    // const displayFavImage = favData.map((fav) => <img key={fav.id} className="favImg" src={fav.image} alt='One of your favorited photos.' />)

    const displayFavData = favData.map(fav => <ExplorePhoto key={fav.id} fav={fav} photoLocationToMap={photoLocationToMap}/>);

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