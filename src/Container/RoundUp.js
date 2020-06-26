import React, { Component } from 'react'
import './RoundUp.css'
import MainHeader from '../Container/MainHeader/MainHeader'
import QuotesSection from '../Container/QuotesSection/QuotesSection'
import MoreCharactersSection from '../Container/MoreCharactersSection/MoreCharactersSection'
import Footer from '../Component/Footer/Footer'

class MainPageSection extends Component{

    render(){
        return(
            <div>
                    <MainHeader />
                    <QuotesSection />
                    <MoreCharactersSection/>
                    <Footer/>
            </div>
        )
    }
}

export default MainPageSection