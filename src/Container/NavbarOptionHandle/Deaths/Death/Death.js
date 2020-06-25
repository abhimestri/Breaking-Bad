import React from 'react'
import './Death.css'

const death =(props) => {
    return (
        <div className="cardForEachDeathSection">
            <h1 className="Death">death : {props.Deathof}</h1>
            <p className="Cause">Cause : {props.Cause}</p>
            <p className="Lastwords">Lastwords : {props.LastWords}</p>
            <p className="Responsible">Responsible : {props.Responsible}</p>
            <p className="SeasonEpisode">season:{props.Season} Episode:{props.Episode}</p>
        </div>
    )
}

export default death