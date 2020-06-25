import React from 'react'
import './Navigation.css'

const Navbar = (props) => {
    return (
        <li className="li-itsem">
            {props.children}
        </li>
    )
}

export default Navbar