import React, { Component } from 'react'
import './QuotesSection.css'
import axios from 'axios'
import Aux from '../../HOC/Aux'
import {Route} from 'react-router-dom'
import Quotes from '../NavbarOptionHandle/Quotes/quotes'

class QuotesSection extends Component{
    state = {
        repeat: true,
        Quotes : [],
        Author : []
    }

    getQuotes = () => {
        axios.get("https://www.breakingbadapi.com/api/quotes")
                .then(res => {
                    let parsedquotes = res.data.map(entry => {
                        return entry.quote
                    })
                    let parsedquotesauthor = res.data.map(entry => {
                        return entry.author
                    })
                    this.setState({
                            repeat : false,
                            Quotes: [...parsedquotes],
                            Author : [...parsedquotesauthor]
                        })
                })
                .catch(err =>  console.log(err))
    }

    render(){
        if(this.state.repeat){
            this.getQuotes()
        }
        return(
            <Aux>
                <div className="QuotesSection">
                    <p className="quotesSectionTitle">famous quotes</p>
                    <div className="quotesSectionCard">
                        <p className="text">{this.state.Quotes[12]}<br/>
                            <span>~{this.state.Author[12]}</span>
                        </p>
                        <p className="text">{this.state.Quotes[23]}<br/>
                            <span>~{this.state.Author[23]}</span>
                        </p>
                        <p className="text">{this.state.Quotes[52]}<br/>
                            <span>~{this.state.Author[52]}</span>
                        </p>
                        <p className="text">{this.state.Quotes[46]}<br/>
                            <span>~{this.state.Author[46]}</span>
                        </p>
                        <p className="text">{this.state.Quotes[30]}<br/>
                            <span>~{this.state.Author[30]}</span>
                        </p>
                    </div>
                    <p className="moreQuotes">
                        <a className="moreQuotesLink" href="/quotes">see more quotes</a>
                    </p>
                </div>
                <Route path="/quotes" component={Quotes}/>
            </Aux>
        )
    }
}

export default QuotesSection