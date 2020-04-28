import { ReactComponent as Paperplane } from './icons/paper-plane.svg';
import Navbar from './navbar.js'
import Main from './main.js';

import React from 'react';
// import { CSSTransition } from 'react-transition-group';

class App extends React.Component {

  render () {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;