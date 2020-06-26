import Navbar from './navbar.js'
import Main from './main.js';
import Welcome from './components/welcome.js'
import HooliBox from './components/hoolibox.js'
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";

import React, { useState, useEffect, Fragment } from 'react';

function App() {

    return (
      <div>
        <Router>
          <Welcome />
          <Navbar />
          <Main />
          {/* <Route exact path={`/hooli_box`} render={routeProps => <HooliBox />}/>
          <Route exact path={`/philosophy`} render={routeProps => <Philosophy />}/> */}
        </Router>
      </div>
    );
}

export default App;