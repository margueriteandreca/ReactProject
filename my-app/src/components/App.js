import '../App.css';
import NavBar from './NavBar';
import Explore from './Explore';
import MyProfile from './MyProfile';
import HomeFeed from "./HomeFeed";
import Map from "./Map"
import React from "react";
import { Switch, Route } from "react-router-dom";
import {useState} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"


function App() {
    const [location, setLocation] = useState("New York City")
    const [coordinates, setCoordinates] = useState({lat: 40.7128, lng: -74.0060});
    const [favorites, setFavorites] = useState([])

    // function savingLike(isLiked) {
    //     setLikedStatus(isLiked)
    // }

    function photoLocationToMap(coordinates) {
        // setLocation(location);
        setCoordinates(coordinates)
        console.log(coordinates)
    }

    const { isLoaded } = useLoadScript({googleMapsApiKey: "AIzaSyAllOt_OfWxDIIvWRAkyegaSKiuadrRmYw"});

    if (!isLoaded) {
        return <h3>Loading...</h3>
    }

    return (
    <>
        <NavBar />
        <Switch>
            <Route exact path="/">
                <HomeFeed favorites={favorites} setFavorites={setFavorites}/>
            </Route>
            <Route path="/explore">
                <Explore photoLocationToMap={photoLocationToMap}/>
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
    </>
    );
}


export default App;
