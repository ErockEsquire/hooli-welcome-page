import React from 'react';
import { ReactComponent as Lotus } from './icons/lotus.svg';
import { ReactComponent as About } from './icons/about.svg';
import { ReactComponent as ArrowLeft } from './icons/arrow-left.svg';
import { ReactComponent as ArrowDown } from './icons/arrow-down.svg';
import { ReactComponent as Pen } from './icons/pen.svg';
import { ReactComponent as Box } from './icons/box.svg';
import { ReactComponent as Chat } from './icons/comments.svg';
import { ReactComponent as Hooli } from './icons/hooli.svg';

class Navbar extends React.Component {

  


  state = {
    open: false
  }
  
  clickToggle = (event) => {
    if(this.state.open) {
      this.setState({
        open: false
      })
      event.target.style.transform = "rotate(90deg)"
      event.target.style.transition = "600ms"
    }
    else if(!this.state.open) {
      this.setState({
        open: true
      })
      event.target.style.transform = "rotate(-90deg)"
      event.target.style.transition = "600ms"
    }
  }

  clickClose = (event) => {
    this.setState({
      open: false
    })
    event.target.style.transform = "rotate(90deg)"
  }

  NavItem = (props) => {
    return (
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={props.clickToggle} onBlur={props.clickClose}>
          { props.icon }
        </a>
        {this.state.open && props.children}
      </li>
    );
  }

  render() {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          <Logo icon={<Hooli />} />
          <this.NavItem icon={<Box />} />
          <this.NavItem icon={<Chat />} />
          <this.NavItem icon={this.state.open ? <ArrowDown />:<ArrowLeft />} clickToggle={this.clickToggle} clickClose={this.clickClose}>
            <Dropmenu />
          </this.NavItem>
        </ul>
      </nav>
    )
  }
}

function Dropmenu() {
    
  function Dropitem(props) {
    return (
      <a href="#" className="dropitem">
        <span className="icon-left">{props.leftIcon}</span>
        {props.children}
        <span className="icon-button">{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className="dropmenu">
        <div className="menu">
          <Dropitem rightIcon={<Lotus />}>Our Philosophy</Dropitem>
          <Dropitem rightIcon={<About />}>About Us</Dropitem>
          <Dropitem leftIcon={<ArrowLeft />} rightIcon={<Pen />}>Email Us</Dropitem>
        </div>
    </div>
  )
}

const Logo = (props) => {
  return (
    <li className="logo">
      { props.icon }
    </li>
  )
}

export default Navbar;