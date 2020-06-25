import React, { Component } from 'react'
import './Quotes.css'
import axios from 'axios'
import Quote from './Quote/Quote'

class Quotes extends Component{

    state = {
        repeat : true,
        data : []
    }

    getQuotes = () => {
        axios.get("https://www.breakingbadapi.com/api/quotes")
        .then(res => {
            this.setState({
                    repeat : false,
                    data : res.data
                })
        })
        .catch(err =>  console.log(err))
    }

    render(){
        if(this.state.repeat){
            this.getQuotes()
        }

        let quotes = this.state.data.map(quote => {
            return (
                <Quote
                    Author = {quote.author}
                    Quote = {quote.quote}
                    />
            )
        })

        return(
            <div className="QuotesDisplayPage">
                <div className="QuotesSectionOfNavBar">
                    {quotes}
                </div>
            </div>
        )
    }
}

export default Quotes