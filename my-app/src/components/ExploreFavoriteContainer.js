import React from "react";
import ExplorePhoto from "./ExplorePhoto";
import ProfilePhoto from "./ProfilePhoto";


function ExploreFavoriteContainer({myProfile, suggestions, photoLocationToMap}) {

    const myFavorites = [...myProfile[0].favorited_categories]


    const filteredSuggestions = suggestions.filter(suggestion => {
        const matchedSuggestionToFavorites = suggestion.categories.find(category => myFavorites.includes(category)) //returns 1st instance of match
        return !!matchedSuggestionToFavorites; //return of filter- converts found cat -> true; undefined -> false
    })



    function buildComponent(suggestion){
        //console.log("TO BUILD: ", suggestion);
        return <ProfilePhoto key={suggestion.id} photo={suggestion} photoLocationToMap={photoLocationToMap}/>
    };


    return (
    <div className="photos-container" >
                {filteredSuggestions.map(suggestion => buildComponent(suggestion))}
            </div>

    )

}


export default ExploreFavoriteContainer;