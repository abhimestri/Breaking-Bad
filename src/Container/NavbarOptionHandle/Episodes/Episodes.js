import React, { Component } from 'react'
import axios from 'axios'
import './Episodes.css'
import Episode from './Episode/Episode'
import LoadingGif from '../../../Assets/LoadingGif/Loading'

class Episodes extends Component{

    state = {
        repeat : true,
        data : [],
        loading : true
    }

    getEpisodes = () => {
        axios.get("https://www.breakingbadapi.com/api/episodes")
                .then(res => {
                    this.setState({
                        repeat : false,
                        data : res.data,
                        loading :false
                    })})
                .catch(err => console.log(err))
    }

    render(){
        let data ,Data
        if(this.state.repeat){
            this.getEpisodes()
        }
        data = this.state.data.map(episode => {
            return (
                <Episode
                    Title = {episode.title}
                    Season = {episode.season}
                    Episode = {episode.episode}
                    Characters = {episode.characters}
                    />
            )
        })
        if(this.state.loading){
            Data = <LoadingGif/>
        }else{
            Data =(
                <div className="CardForEPisodeDisplay">{data}</div>
            )
        }
        return(
            <div>{Data}</div>
        )
    }
}

export default Episodes