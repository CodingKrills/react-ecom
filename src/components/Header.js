import React from 'react'

const Header = () => {

    const openNav = () => {
        console.log("CLICKED NAV BTN");
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
        document.querySelector('.nav-icon0').classList.toggle('open')
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light fixed-top shadow" aria-label="Main navigation">
            <div className="container">
                <a className="navbar-brand" href="/">Offcanvas navbar</a>
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
                            <a className="nav-link" href="/">Notifications</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Switch account</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown01">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
