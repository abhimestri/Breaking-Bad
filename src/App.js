import React, { Component } from 'react';
import Navbar from './Component/NavigationBar/Navigations'
import  './App.css';
import MainHeader from './Container/MainHeader/MainHeader'
import QuotesSection from './Container/QuotesSection/QuotesSection'
import MoreCharactersSection from './Container/MoreCharactersSection/MoreCharactersSection'
import Footer from './Component/Footer/Footer'

class App extends Component {

    render(){
      return (
        <div>
          <div className="Navbar">
            <Navbar />
          </div>
          <div className="MainHeader">
            <MainHeader />
          </div>
          <div>
            <QuotesSection />
          </div>
          <MoreCharactersSection/>
          <Footer/>
        </div>
      );
    }
}

export default App;
