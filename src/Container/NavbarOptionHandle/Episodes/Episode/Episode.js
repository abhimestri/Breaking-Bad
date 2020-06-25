import React from 'react'
import './Episode.css'

const episode = (props) => {

    let data = props.Characters.map(character => {
        return <li className="EachCharacter">{character}</li>
    })

    return (
        <div className="EachCardForEpisode">
            <h2 className="Title">{props.Title}</h2>
            <p className="SeasonAndEpisode">Season : {props.Season} Episode : {props.Episode}</p>
            <ul className="ListOFCharacters"> characters : {data}</ul>
        </div>
    )
}

export default episode