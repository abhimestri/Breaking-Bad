import React, { Component } from 'react'
import axios from 'axios'
import './MainHeader.css'

class MainHeader extends Component{
  state = {
    headerQuote : null,
    headerImg : null,
    repeat : true,
    data : []
  }
  getDatas = () => {
    axios.get("https://www.breakingbadapi.com/api/quotes")
        .then(res => {
            this.setState({headerQuote : res.data[0].quote})
        })
        .catch(err => console.log(err))
    axios.get("https://www.breakingbadapi.com/api/characters")
            .then(res =>{
                 this.setState(
                     {
                         headerImg : res.data[0].img,
                         repeat : false,
                         data : [...res.data]
                    })}
                 )
            .catch(err => console.log(err.message))
    }

    render(){
        if(this.state.repeat){
            this.getDatas();
        }
        // console.log(this.state.data)
        let parsedImg = this.state.data.map(Image => {
            return Image.img
        })
        let parsedName = this.state.data.map(Name => {
            return Name.name
        })
        let parsedNickname = this.state.data.map(Nickname => {
            return Nickname.nickname
        })
        let parsedOccupation = this.state.data.map(Occupation => {
            return Occupation.occupation[0];
        })
        return(
            <div className="MainHeaderSection">
                <div className="headerSection">
                    <h2 className="HeaderQuote"> ~{this.state.headerQuote}</h2>
                    <img  className="HeaderImg" src={this.state.headerImg} alt =""/>
                </div>
                <div className="mainSectionDisplay">
                        <div className="cardForImg">
                            <img className="image" src={parsedImg[1]} alt=""/>
                            <div className="cardText">
                                <h2 className="cardTextHeader">{parsedName[1]}</h2>
                                <p className="cardTextSubHeader">{parsedNickname[1]}</p>
                                <p className="cardTextContent">{parsedOccupation[1]}</p>
                            </div>
                        </div>
                        <div className="cardForImg">
                            <img className="image" src={parsedImg[2]} alt=""/>
                            <div className="cardText">
                                <h2 className="cardTextHeader">{parsedName[2]}</h2>
                                <p className="cardTextSubHeader">{parsedNickname[2]}</p>
                                <p className="cardTextContent">{parsedOccupation[2]}</p>
                            </div>
                        </div>
                        <div className="cardForImg">
                            <img className="image" src={parsedImg[4]} alt=""/>
                            <div className="cardText">
                                <h2 className="cardTextHeader">{parsedName[4]}</h2>
                                <p className="cardTextSubHeader">{parsedNickname[4]}</p>
                                <p className="cardTextContent">{parsedOccupation[4]}</p>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}


export default MainHeader