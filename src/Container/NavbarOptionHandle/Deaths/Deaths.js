import React, { Component } from 'react'
import axios from 'axios'
import './Deaths.css'
import Death from './Death/Death'
import LoadingGif from '../../../Assets/LoadingGif/Loading'

class Deaths extends Component{

    state = {
        repeat: true,
        data : [],
        loading : true
    }

    getDeaths = () => {
        axios.get("https://www.breakingbadapi.com/api/deaths")
            .then(res => {
                this.setState({
                    repeat :false,
                    data : res.data,
                    loading : false
                })
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    render(){
        let data, Data
        if(this.state.repeat){
            this.getDeaths()
        }
        data = this.state.data.map(death => {
            return (
                <Death
                    Deathof = {death.death}
                    Cause = {death.cause}
                    LastWords = {death.last_words}
                    Responsible = {death.responsible}
                    Episode = {death.episode}
                    Season = {death.season}
                />
            )
        })
        if(this.state.loading){
            Data = <LoadingGif/>
        }else{
            Data =(
                <div className="DeathsSection">{data}</div>
            )
        }
        return(
            <div>{Data}</div>
        )
    }
}

export default Deaths