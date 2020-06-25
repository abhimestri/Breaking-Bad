import React, { Component } from 'react'
import axios from 'axios'
import './Deaths.css'
import Death from './Death/Death'

class Deaths extends Component{

    state = {
        repeat: true,
        data : []
    }

    getDeaths = () => {
        axios.get("https://www.breakingbadapi.com/api/deaths")
            .then(res => {
                this.setState({
                    repeat :false,
                    data : res.data
                })
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    render(){

        if(this.state.repeat){
            this.getDeaths()
        }
        let data  = this.state.data.map(death => {
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

        return(
            <div className="DeathsSection">{data}</div>
        )
    }
}

export default Deaths