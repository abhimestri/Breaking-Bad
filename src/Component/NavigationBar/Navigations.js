import React from 'react'
import {Route , Link} from 'react-router-dom'
import './Navigations.css'
import RoundUp from '../../Container/RoundUp'
import BrandName from '../Branding/BrandName'
import CharactersSet from '../../Container/NavbarOptionHandle/Characters/Charcaters'
import Episodes from '../../Container/NavbarOptionHandle/Episodes/Episodes'
import Quotes from '../../Container/NavbarOptionHandle/Quotes/quotes.js'
import Deaths from '../../Container/NavbarOptionHandle/Deaths/Deaths'

const Navbar = (props) => {
    return (
        <div>
            <BrandName/>
            <div className="NavbarSec">
                <ul className="list-elements">
                    <li className="listEle"><Link className="li-item" to="/">Home</Link></li>
                    <li className="listEle"><Link className="li-item" to="/Characters">Character</Link></li>
                    <li className="listEle"><Link className="li-item" to="/Episodes">Episodes</Link></li>
                    <li className="listEle"><Link className="li-item" to="/Quotes">Quotes</Link></li>
                    <li className="listEle"><Link className="li-item" to="/Deaths">Deaths</Link></li>
                </ul>
            </div>
            <Route path="/" exact component={RoundUp} />
            <Route path="/Characters" exact component={CharactersSet}/>
            <Route path="/Episodes" exact component={Episodes}/>
            <Route path="/Quotes" exact component={Quotes}/>
            <Route path="/Deaths" exact component={Deaths}/>
        </div>
    )
}

export default Navbar