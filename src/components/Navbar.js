import React, { useState } from 'react'
import propTypes from "prop-types"
import { Link } from 'react-router-dom'


// here I want "React Function Based Component" (enter "rfc")

export default function Navbar(props) {

  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <nav className={`navbar navbar-expand-lg border border-success navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" style={props.style} to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" style={props.style} to="/">Home</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link" style={props.style} to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
          <button className="btn btn-outline-success bg-primary text-white mx-1 my-1" type="submit" onClick={props.changeModesPrimary}>Primary</button>
          <button className="btn btn-outline-success bg-secondary text-white mx-1 my-1" type="submit" onClick={props.changeModesSecondary}>Secondary</button>
          <button className="btn btn-outline-danger bg-success text-white mx-1 my-1" type="submit" onClick={props.changeModesSuccess}>Success</button>
          <button className="btn btn-outline-success bg-danger text-white mx-1 my-1" type="submit" onClick={props.changeModesDanger}>Danger</button>
          <button className="btn btn-outline-success bg-warning text-black mx-1 my-1" type="submit" onClick={props.changeModesWarning}>Warning</button>
          <button className="btn btn-outline-success bg-info text-black mx-1 my-1" type="submit" onClick={props.changeModesInfo}>Info</button>
          <button className="btn btn-outline-success bg-light text-dark mx-1 my-1" type="submit" onClick={props.changeModesLight}>Light</button>
          <button className="btn btn-outline-light bg-dark text-white mx-1 my-1" type="submit" onClick={props.changeModesDark}>Dark</button>
        </div> 
        {/* <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
        </div> */}
      </div>
    </nav>  
  )
}

// PropTypes:- Types of props requested from the App.JS
Navbar.propTypes = {
    // title: propTypes.number,
    // title is the variable name being send from the App.js
    title: propTypes.string,
    aboutText: propTypes.string

    // It will give error
    // title: propTypes.string.isRequired,    
}

// Suppose when any props is send empty from App.js then these default values will be set......
Navbar.defaultProps = {
    title: "DefaultTitle",
    aboutText: "DefaultAbout"
}