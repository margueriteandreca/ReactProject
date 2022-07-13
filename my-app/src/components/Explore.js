
import React, { useState } from 'react';
import ExplorePhoto from './ExplorePhoto';
import '../Explore.css'

function Explore({photoLocationToMap, myProfile, posSuggestions, mySuggestions}) {

    // eslint-disable-next-line
    const [favData, setFavData] = useState([]);
    // eslint-disable-next-line
    const [view, setView] = useState('favorites');

    //const displayFavImage = favData.map((fav) => <img key={fav.id} className="favImg" src={fav.image} alt='One of your favorited photos.' />)
    let myFavorites = []
    
    myProfile[0].favorited_categories.forEach((category) => {
        myFavorites = [...myFavorites, category]
        //deepLoop(category);
    });

    // console.log("MY PROFILE: ", myProfile[0].favorited_categories);
    // console.log("MY FAVOURITES: ", myFavorites);
    // console.log("MY SUGGESTIONS: ", mySuggestions);
    
    function deepLoop(suggestions) {
        console.log("DEEP LOOP");
        let shownSuggestions = [];
        let photosArr = [];

        for (let i = 0; i < suggestions.length; i++) {
            for (let y =0; y < myFavorites.length; y++){

                if(suggestions[i].includes(myFavorites[y])){
                    console.log("COMPARED: ", suggestions[i]);
                    console.log("LOOP SUGGEST: ", suggestions[i]);
                    console.log("LOOP FAVORITE: ", myFavorites[y]);
                    shownSuggestions = [...shownSuggestions, suggestions[i]]
                    const explorerPhoto = buildComp(posSuggestions[i])
                    photosArr.push(explorerPhoto);
                };

            }

        }
        return photosArr
    };

    function buildComp(suggestion){
        //console.log("TO BUILD: ", suggestion);
        return <ExplorePhoto key={suggestion.id} image={suggestion.image} username={suggestion.username} location={suggestion.location} coordinates={suggestion.coordinates} />
    };

    //deepLoop(mySuggestions)

    return (
        <>
            <div className='btnContainer'>
                <button className='navBtn' onClick={() => setView('favorites')}>Favorites</button>
                <button className='navBtn' onClick={() => setView('locations')}>Locations</button>
            </div>
            <div className='favBoxesContainer' >
                {deepLoop(mySuggestions)}
            </div>
        </>
        )
};

export default Explore; 