import '../App.css';
import NavBar from './NavBar';
import Explore from './Explore';
import MyProfile from './MyProfile';
import HomeFeed from "./HomeFeed";
import Map from "./Map"
import React from "react";
import { Switch, Route } from "react-router-dom";
import {useState} from "react";


function App() {
    const [location, setLocation] = useState("New York City")

    function photoLocationToMap(location) {
        setLocation(location);
    }

  

return (
  <div>
      <NavBar />
      <Switch>
          <Route exact path="/">
              <HomeFeed />
          </Route>
          <Route path="/explore">
              <Explore />
          </Route>
          <Route path="/map">
              <Map />
          </Route>
          <Route path="/myprofile">
              <MyProfile photoLocationToMap={photoLocationToMap}/>
          </Route>
          <Route path="/*">
              <h1>You must be lost...</h1>
          </Route>
      </Switch>
  </div>
);
}


export default App;
