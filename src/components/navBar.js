import React from 'react'
//FontAwsome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import { orange } from 'color-name'

const navBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
        <a className="navbar-brand">Devanshu's Portfolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color:"orange"}}/>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
        </li>
        
        <li className="nav-item">
        <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Resume</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
        </li>
        </ul>
        </div>
        </div>
        </nav>
    )
}

export default navBar
