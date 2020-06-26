import Navbar from './navbar.js'
import Main from './main.js';
import Welcome from './components/welcome.js'
// import {
//   BrowserRouter as Router,
//   Redirect,
//   Route
// } from "react-router-dom";

import React from 'react';

function App() {

    return (
      <div>
        <Welcome />
        <Navbar />
        <Main />
      </div>
    );
}

export default App;