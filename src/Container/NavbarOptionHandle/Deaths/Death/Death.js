import React from 'react'
import './Death.css'

const death =(props) => {
    return (
        <div className="cardForEachDeathSection">
            <h3>death : {props.Deathof}</h3>
            <p>Cause : {props.Cause}</p>
            <p>Lastwords : {props.LastWords}</p>
            <p>Responsible : {props.Responsible}</p>
            <p>season:{props.Season} Episode:{props.Episode}</p>
        </div>
    )
}

export default death