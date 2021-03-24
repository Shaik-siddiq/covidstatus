import React from 'react'
import {Link} from 'react-router-dom'

let Header= () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <Link to='/India'>India</Link>
                <Link to='/World'>World</Link>
            </nav>
        </div>
    )
}

export default Header
