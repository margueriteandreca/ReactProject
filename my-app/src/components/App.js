import '../App.css';
import NavBar from './NavBar';
import Explore from './Explore';
import MyProfile from './MyProfile';
import HomeFeed from "./HomeFeed";
import Map from "./Map"
import React from "react";
import { Switch, Route } from "react-router-dom";
import {useState, useEffect} from "react";
// eslint-disable-next-line
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import { CSSTransition, TransitionGroup } from "react-transition-group"


function App() {
    const [coordinates, setCoordinates] = useState({lat: 40.7128, lng: -74.0060});
    const [favorites, setFavorites] = useState([]);
    const [myProfile, setMyProfile] = useState([]);
    const [suggestions, setSuggestions] = useState([])
    


    useEffect(() => {
        fetch(`http://localhost:3001/myprofile`)
        .then((r) => r.json())
        .then((data) => setMyProfile(data))
    }, []);

    useEffect(() => {
        fetch(`http://localhost:3001/suggestedimages`)
        .then((r) => r.json())
        .then((data) => setSuggestions(data))
    }, []);

    function photoLocationToMap(coordinates) {
        setCoordinates(coordinates)
        console.log(coordinates)
    }

    const { isLoaded } = useLoadScript({googleMapsApiKey: "AIzaSyAllOt_OfWxDIIvWRAkyegaSKiuadrRmYw"});

    if (!isLoaded) {
        return <h3>Loading...</h3>
    }

    if (myProfile.length === 0 && suggestions.length === 0){
        return <h3>Loading...</h3>
    }
    console.log("APP -- MYPROFILE: ", myProfile);
    console.log("APP -- SUGGESTIONS: ", suggestions);

    let mySuggestions = []
    
    suggestions.forEach((img) => {
        mySuggestions.push(img.categories);
    });

   




    return (
    <>
        <NavBar />
        <Route render={({location}) => (
            <TransitionGroup>
            <CSSTransition 
            key={location.key}
            timeout={300}
            classNames="fade"
            >
        <Switch>
            <Route exact path="/">
                <HomeFeed favorites={favorites} setFavorites={setFavorites} photoLocationToMap={photoLocationToMap} setCoordinates={setCoordinates}/>
            </Route>
            <Route path="/explore">
                <Explore photoLocationToMap={photoLocationToMap} myProfile={myProfile} suggestions={suggestions} mySuggestions={mySuggestions} />
            </Route>
            <Route path="/map">
                <Map coordinates={coordinates} setCoordinates={setCoordinates}/>
            </Route>
            <Route path="/myprofile">
                <MyProfile photoLocationToMap={photoLocationToMap} favorites={favorites} setFavorites={setFavorites}/>
            </Route>
            <Route path="/*">
                <h1>You must be lost...</h1>
            </Route>
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        )}/>
    </>
    );
}


export default App;
