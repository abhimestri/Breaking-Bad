import React, {Component}from 'react'
import './MoreCharactersSection.css'
import axios from 'axios'
import Aux from '../../HOC/Aux'
import {Route} from 'react-router-dom'
import Characters from '../NavbarOptionHandle/Characters/Charcaters'

class MoreCharactersSection extends Component{

    state = {
        repeat : true,
        Characters : [],
        Nickname : [],
        CharacterImage : [],
        Occupation : []
    }

    getData = () => {
        let characters, characterImage,nicknames,occupations
        axios.get("https://www.breakingbadapi.com/api/characters")
                .then(res => {
                    characters = res.data.map(character => {
                        return character.name
                    })
                    characterImage = res.data.map(image => {
                        return image.img
                    })
                    nicknames = res.data.map(nickname => {
                        return nickname.nickname
                    })
                    occupations = res.data.map(occupation => {
                        return occupation.occupation[0]
                    })
                this.setState({
                    repeat : false,
                    Characters : characters,
                    CharacterImage : characterImage,
                    Nickname : nicknames,
                    Occupation : occupations
                })

                })
                .catch(err => console.log(err))
    }

    render(){

        if(this.state.repeat){
            this.getData();
        }
        return (
            <Aux>
                <div className="moreCharactersBlock">
                    <div className="headerForMoreCharacterSection">
                            <h1 className="title">More characters</h1>
                    </div>
                    <div className="moreCharactersSection">
                        <div className="eachCharacterInMoreSection">
                            <img className="Image" src={this.state.CharacterImage[5]} alt=""/>
                            <div className="imageDescription">
                                <p className="Name">{this.state.Characters[5]}</p>
                                <p className="NickName">{this.state.Nickname[5]}</p>
                                <p className="Occupation">{this.state.Occupation[5]}</p>
                            </div>
                        </div>
                        <div className="eachCharacterInMoreSection">
                            <img className="Image" src={this.state.CharacterImage[10]} alt=""/>
                            <div className="imageDescription">
                                <p className="Name">{this.state.Characters[10]}</p>
                                <p className="NickName">{this.state.Nickname[10]}</p>
                                <p className="Occupation">{this.state.Occupation[10]}</p>
                            </div>
                        </div>
                        <div className="eachCharacterInMoreSection">
                            <img className="Image" src={this.state.CharacterImage[7]} alt=""/>
                            <div className="imageDescription">
                                <p className="Name">{this.state.Characters[7]}</p>
                                <p className="NickName">{this.state.Nickname[7]}</p>
                                <p className="Occupation">{this.state.Occupation[7]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="BtnSection">
                        <a href="/Characters" className="btn btn-outline-dark BtnForMoreCharacters">see more characters</a>
                    </div>
                </div>
                <Route path="/Characters" exact component={Characters}/>
            </Aux>
        )
    }
}


export default MoreCharactersSection