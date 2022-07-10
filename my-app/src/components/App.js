import '../App.css';
import NavBar from './NavBar';
import Explore from './Explore';
import MyProfile from './MyProfile';
import HomeFeed from "./HomeFeed";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";


function App() {
  

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
          <Route path="/myprofile">
              <MyProfile />
          </Route>
          <Route path="/*">
              <h1>You must be lost...</h1>
          </Route>
      </Switch>
  </div>
);
}


export default App;
