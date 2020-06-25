import React from 'react'
import {Route} from 'react-router-dom'
import './Navigations.css'
import RoundUp from '../../Container/RoundUp'
import BrandName from '../Branding/BrandName'
import CharactersSet from '../../Container/NavbarOptionHandle/Characters/Charcaters'
import Episodes from '../../Container/NavbarOptionHandle/Episodes/Episodes'

const Navbar = (props) => {
    return (
        <div>
            <BrandName/>
            <div className="NavbarSec">
                <ul className="list-elements">
                    <li className="listEle"><a className="li-item" href="/">Home</a></li>
                    <li className="listEle"><a className="li-item" href="/Characters">Character</a></li>
                    <li className="listEle"><a className="li-item" href="/Episodes">Episodes</a></li>
                    <li className="listEle"><a className="li-item" href="/Quotes">Quotes</a></li>
                    <li className="listEle"><a className="li-item" href="/Deaths">Deaths</a></li>
                </ul>
            </div>
            <Route path="/" exact component={RoundUp} />
            <Route path="/Characters" exact component={CharactersSet}/>
            <Route path="/Episodes" exact component={Episodes}/>
        </div>
    )
}

export default Navbar