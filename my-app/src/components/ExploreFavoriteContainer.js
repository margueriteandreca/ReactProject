import React from "react";
import ExplorePhoto from "./ExplorePhoto";


function ExploreFavoriteContainer({myProfile, suggestions, mySuggestions}) {

    const myFavorites = [...myProfile[0].favorited_categories]

    // console.log("MY PROFILE: ", myProfile[0].favorited_categories);
    // console.log("MY FAVOURITES: ", myFavorites);
    // console.log("MY SUGGESTIONS: ", mySuggestions);
    
    const filteredSuggestions = suggestions.filter(suggestion => {
        const matchedSuggestionToFavorites = suggestion.categories.find(category => myFavorites.includes(category)) //returns 1st instance of match
        return !!matchedSuggestionToFavorites; //return of filter- converts found cat -> true; undefined -> false
    })

    // console.log('!!! fave categories', myFavorites);
    // console.log('!!! suggestions', suggestions);
    // console.log('!!! filtered', filteredSuggestions);


    function buildComponent(suggestion){
        //console.log("TO BUILD: ", suggestion);
        return <ExplorePhoto key={suggestion.id} image={suggestion.image} username={suggestion.username} location={suggestion.location} coordinates={suggestion.coordinates} />
    };


    return (
    <div className='favBoxesContainer' >
                {filteredSuggestions.map(suggestion => buildComponent(suggestion))}
            </div>

    )

}


export default ExploreFavoriteContainer;