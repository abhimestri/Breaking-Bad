import React from 'react'
import './Quote.css'

const quote = (props) => {
    return (
        <div className="EachQuoteCard">
            <h2 className="QuoteForEachCard">"{props.Quote}"</h2>
            <p className="AuthorForEachQuote">~{props.Author}</p>
        </div>
    )
}

export default quote