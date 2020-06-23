import React from 'react'
import Navigation from './Navigation/Navigation'
import './Navigations.css'
import BrandName from '../Branding/BrandName'


const Navbar = (props) => {
    return (
        <div>
            <BrandName/>
            <div className="list-elements">
                <Navigation>Character</Navigation>
                <Navigation>Deaths</Navigation>
                <Navigation>Episodes</Navigation>
                <Navigation>Quotes</Navigation>
            </div>
        </div>
    )
}

export default Navbar