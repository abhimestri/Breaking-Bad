import React, { Component } from 'react'
import axios from 'axios'
import './Characters.css'
import Character from './Character/Character'

class Characters extends Component{

    state = {
        repeat : true,
        Characters  :[]
    }

    getCharacters = () => {
        let characters;
        axios.get("https://www.breakingbadapi.com/api/characters")
                .then(res => {
                    characters = res.data.map(character => {
                        return character
                    })
                    this.setState({
                        repeat : false,
                        Characters : characters
                    })
                })
                .catch(err => console.log(err))
    }

    render(){

        if(this.state.repeat){
            this.getCharacters();
        }
        let data = this.state.Characters.map(data => {
            // console.log(data)
            return (
                        <Character
                            Name = {data.name}
                            Image = {data.img}
                            Occupation = {data.occupation[0]}
                            Nickname = {data.nickname}
                        />
            )
        })
        return (
            <div className="CardForCharacters">{data}</div>
        )
    }
}

export default Characters