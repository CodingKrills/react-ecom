import React from 'react'
import './Header.css'

import {
    Link
} from "react-router-dom";


const Header = () => {

    const openNav = () => {
        console.log("CLICKED NAV BTN");
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
        document.querySelector('.nav-icon0').classList.toggle('open')
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-default fixed-top my-shadow"
            aria-label="Main navigation">
            <div className="container">
                <Link className="navbar-brand" to="/">Offcanvas navbar</Link>
                <button className="navbar-toggler mt-2 p-0 border-0 nav-icon0" type="button" onClick={openNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Switch account</a>
                        </li>
                        <li className="nav-item dropdown" >
                            <a className="nav-link dropdown-toggle"
                                href="/" id="dropdown01"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >Settings</a>
                            <ul className="dropdown-menu"
                                aria-labelledby="dropdown01">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <div className="widgets-wrap float-md-right">
                            <div className="widget-header mr-3">
                                <a href="/" className="icon icon-sm rounded-circle border mx-2"
                                ><i className="fa fa-shopping-cart"></i
                                ></a>
                                <span className="badge badge-pill badge-danger notify">0</span>
                            </div>
                            <div className="widget-header icontext">
                                <a href="/" className="icon icon-sm rounded-circle border"
                                ><i className="fa fa-user"></i
                                ></a>
                                <div className="text">
                                    <span className="text-muted">Welcome!</span>
                                    <div>
                                        <a href="/">Sign in</a> |
                                        <a href="/"> Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
