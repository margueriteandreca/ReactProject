// this file will create a function: based on the categories of the favorited photos, return categories similar so that they may also be added to category preferences in db json 
//idea is that their explore will have recs based on their exact categories, but also similar ones for discoverability 

import MyPhotos from "./components/MyPhotos";


function discoverabilityExplore() {
    console.log("hi")
    MyPhotos.forEach(photo => { 
        switch(photo.category) {
            case x:
            // code block
            break;
            case y:
            // code block
            break;
            default:
            // code block
        }
})}