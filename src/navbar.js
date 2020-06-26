import { ReactComponent as ArrowLeft } from './icons/arrow-left.svg';
import { ReactComponent as Box } from './icons/box.svg';
import { ReactComponent as Chat } from './icons/comments.svg';
import { ReactComponent as Hooli } from './icons/hooli.svg';
import { ReactComponent as Lotus } from './icons/lotus.svg';
import { ReactComponent as About } from './icons/about.svg';
import { ReactComponent as Pen } from './icons/pen.svg';


import React, { useState } from 'react';

export default function Navbar() {

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <Logo icon={<Hooli />} />
        <NavItem icon={<Box />} />
        <NavItem icon={<Chat />} />
        <NavDropItem icon={<ArrowLeft />}>
          <Dropmenu />
        </NavDropItem>
      </ul>
    </nav>
  );
}

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <span href="#" className="icon-button" onClick={() => setOpen(!open)}>
        { props.icon }
      </span>
    </li>
  );
}

const NavDropItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <span className={open ? 'icon-button dropdown':'icon-button dropleft'} onClick={() => setOpen(!open)} onBlur={() => setOpen(false)}>
        { props.icon }
      </span>
      <Dropmenu open={open}/>
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

function Dropmenu({ open }) {

  function Dropitem(props) {
    return (
      <span className="dropitem">
        <span className="icon-left">{props.leftIcon}</span>
        {props.children}
        <span className="icon-button">{props.rightIcon}</span>
      </span>
    )
  }

  return (
    <div className={open ? "dropmenu open":"dropmenu closed"}>
        <div className="menu">
          <Dropitem rightIcon={<Lotus />}>Our Philosophy</Dropitem>
          <Dropitem rightIcon={<About />}>About Hooli</Dropitem>
          <Dropitem leftIcon={<ArrowLeft />} rightIcon={<Pen />}>Email Us</Dropitem>
        </div>
    </div>
  )
}