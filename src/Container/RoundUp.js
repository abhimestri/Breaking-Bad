import React, { Component } from 'react'
import './RoundUp.css'
import MainHeader from '../Container/MainHeader/MainHeader'
import QuotesSection from '../Container/QuotesSection/QuotesSection'
import MoreCharactersSection from '../Container/MoreCharactersSection/MoreCharactersSection'

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
            </div>
        )
    }
}

export default MainPageSection