import React, { Component } from 'react'
import axios from 'axios'
import './Episodes.css'
import Episode from './Episode/Episode'

class Episodes extends Component{

    state = {
        repeat : true,
        data : []
    }

    getEpisodes = () => {
        axios.get("https://www.breakingbadapi.com/api/episodes")
                .then(res => {
                    this.setState({
                        repeat : false,
                        data : res.data
                    })
                    console.log(res.data[0])})
                .catch(err => console.log(err))
    }

    render(){
        let Data
        if(this.state.repeat){
            this.getEpisodes()
        }
        Data = this.state.data.map(episode => {
            return (
                <Episode
                    Title = {episode.title}
                    Season = {episode.season}
                    Episode = {episode.episode}
                    Characters = {episode.characters}
                    />
            )
        })
        return(
        <div className="CardForEPisodeDisplay">{Data}</div>
        )
    }
}

export default Episodes