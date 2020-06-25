import React, { Component } from 'react'
import './RoundUp.css'
import MainHeader from '../Container/MainHeader/MainHeader'
import QuotesSection from '../Container/QuotesSection/QuotesSection'
import MoreCharactersSection from '../Container/MoreCharactersSection/MoreCharactersSection'
// import Episodes from './NavbarOptionHandle/Episodes/Episodes'

class MainPageSection extends Component{
    render(){
        return(
            <div>
                <div className="MainHeader">
                    <MainHeader />
                </div>
                <div>
                    <QuotesSection />
                </div>
                  <MoreCharactersSection/>
                  {/* <Episodes/> */}
            </div>
        )
    }
}

export default MainPageSection