import React from 'react'
import './Navbar.css'

const Navbar = ({brand}) => {
    return ( 
        <nav className="nav-bar display flex justify-center py-3">
            <div className='w-96'>
                <a href="/">{brand}</a>
            </div>
        </nav>      
    )
}

export default Navbar
