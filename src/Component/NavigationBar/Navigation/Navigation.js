import React from 'react'
import './Navigation.css'

const Navbar = (props) => {
    return (
        <li className="li-item">
            {props.children}
        </li>
    )
}

export default Navbar