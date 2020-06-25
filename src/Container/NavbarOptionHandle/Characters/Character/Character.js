import React from 'react'
import './Character.css'

const character = (props) => {
    return (
        // <div className="CardForCharacter">
        <div className="CardForCharacter">
            <img className="Images" src={props.Image} alt=""/>
            <p className="Names">Name : {props.Name}</p>
            <p className="Nicknames">Aka : {props.Nickname}</p>
            <p className="Occupations">Role : {props.Occupation}</p>
        </div>
    )
}

export default character