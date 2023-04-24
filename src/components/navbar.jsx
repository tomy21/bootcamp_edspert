import React from 'react'
import './components.css'

function Navbar() {
    return (
        <nav>
            <div className="logo">EF | Edspert Film</div>
            <div className="links">
                <li>Home</li>
                <li>List Film</li>
                <li>Location</li>
                <li>About</li>
                <li>F&Q</li>
            </div>
            <div className="btn-nav">
                <div className="btn-register">Register</div>
                <div className="btn-login">Login</div>
            </div>
        </nav>
    )
}

export default Navbar