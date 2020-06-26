import React, { Component } from 'react'
import './Quotes.css'
import axios from 'axios'
import Quote from './Quote/Quote'
import LoadingGif from '../../../Assets/LoadingGif/Loading'

class Quotes extends Component{

    state = {
        repeat : true,
        data : [],
        loading : true
    }

    getQuotes = () => {
        axios.get("https://www.breakingbadapi.com/api/quotes")
        .then(res => {
            this.setState({
                    repeat : false,
                    data : res.data,
                    loading : false
                })
        })
        .catch(err =>  console.log(err))
    }

    render(){
        let Data,quotes
        if(this.state.repeat){
            this.getQuotes()
        }

        quotes = this.state.data.map(quote => {
            return (
                <Quote
                    Author = {quote.author}
                    Quote = {quote.quote}
                    />
            )
        })
        if(this.state.loading){
            Data = <LoadingGif/>
        }else{
            Data =(
                <div className="QuotesDisplayPage">
                <div className="QuotesSectionOfNavBar">
                    {quotes}
                </div>
            </div>
            )
        }
        return(
            <div>
                {Data}
            </div>
        )
    }
}

export default Quotes