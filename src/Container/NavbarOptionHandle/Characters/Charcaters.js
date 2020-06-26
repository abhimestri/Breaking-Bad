import React, { Component } from 'react'
import axios from 'axios'
import './Characters.css'
import Character from './Character/Character'
import LoadingGif from '../../../Assets/LoadingGif/Loading'

class Characters extends Component{

    state = {
        repeat : true,
        Characters  :[],
        loading : true
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
                        Characters : characters,
                        loading : false
                    })
                })
                .catch(err => console.log(err))
    }

    render(){
        let Data,data
        if(this.state.repeat){
            this.getCharacters();
        }
        data = this.state.Characters.map(data => {
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
        if(this.state.loading){
            Data = <LoadingGif/>
        }else{
            Data = (
                <div className="CardForCharacters">{data}</div>
            )
        }
        return (
            <div>{Data}</div>
        )
    }
}

export default Characters