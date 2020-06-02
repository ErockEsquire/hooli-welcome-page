import { ReactComponent as ArrowLeft } from './icons/arrow-left.svg';
import { ReactComponent as ArrowDown } from './icons/arrow-down.svg';
import { ReactComponent as Box } from './icons/box.svg';
import { ReactComponent as Chat } from './icons/comments.svg';
import { ReactComponent as Hooli } from './icons/hooli.svg';
import { ReactComponent as Lotus } from './icons/lotus.svg';
import { ReactComponent as About } from './icons/about.svg';
import { ReactComponent as Pen } from './icons/pen.svg';

import React, { useState } from 'react';


const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <Logo icon={<Hooli />} />
        <NavItem icon={<Box />} />
        <NavItem icon={<Chat />} />
        <NavItem icon={open ? <ArrowDown />:<ArrowLeft />} onClick={() => setOpen(!open)}>
          <Dropmenu />
        </NavItem>
      </ul>
    </nav>
  );
}

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        { props.icon }
      </a>
      {open && props.children}
    </li>
  );
}

const Logo = (props) => {
  return (
    <li className="logo">
      { props.icon }
    </li>
  )
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

export default Navbar;