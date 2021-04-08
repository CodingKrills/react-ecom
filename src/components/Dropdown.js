import React from 'react'

const Dropdown = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Brand</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav">
                        <li className="nav-item active"> <a className="nav-link" href="/">Home </a> </li>
                        <li className="nav-item"><a className="nav-link" href="/"> About </a></li>
                        <li className="nav-item"><a className="nav-link" href="/"> Services </a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle" href="/" data-bs-toggle="dropdown">  Hover me  </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/"> Submenu item 1</a></li>
                                <li><a className="dropdown-item" href="/"> Submenu item 2 </a></li>
                                <li><a className="dropdown-item" href="/"> Submenu item 3 </a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="/"> Menu item </a></li>
                        <li className="nav-item"><a className="nav-link" href="/"> Menu item </a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle" href="/" data-bs-toggle="dropdown"> Dropdown right </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="/"> Submenu item 1</a></li>
                                <li><a className="dropdown-item" href="/"> Submenu item 2 </a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Dropdown
