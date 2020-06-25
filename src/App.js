import React, { Component } from 'react';
import Navbar from './Component/NavigationBar/Navigations'
import  './App.css';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {

    render(){
      return (
        <div>
            <BrowserRouter>
                <div>
                    <div className="Navbar">
                        <Navbar />
                    </div>
                </div>
            </BrowserRouter>
        </div>
      );
    }
}

export default App;
