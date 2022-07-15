
import React, { useState } from 'react';
import '../Explore.css'
import ExploreContainerLocation from './ExploreContainerLocation';
import ExploreFavoriteContainer from './ExploreFavoriteContainer';

function Explore({photoLocationToMap, myProfile, suggestions, mySuggestions}) {

    // eslint-disable-next-line
    // const [favData, setFavData] = useState([]);
    // eslint-disable-next-line
    const [isExploreFavorites, setExploreFavorites] = useState(true);

    function handleFavoritesClick() {
        setExploreFavorites(isExploreFavorites => true)
    }
    function handleLocationClick() {
        setExploreFavorites(isExploreFavorites=> false)
    }

    

    return (
        <>
        <div className='btnContainer'>
                <button className='navBtn' onClick={handleFavoritesClick}>Favorites</button>
                <button className='navBtn' onClick={handleLocationClick}>Locations</button>
        </div>
        <div id="my-explore">
            {isExploreFavorites ? 
            <ExploreFavoriteContainer myProfile={myProfile} suggestions={suggestions} mySuggestions={mySuggestions} photoLocationToMap={photoLocationToMap} /> :
            <ExploreContainerLocation  suggestions={suggestions} photoLocationToMap={photoLocationToMap}/> }

        </div>
            
            
        </>
        )
};

export default Explore; 