import React from 'react'
import './Footer.css'

const footer = () => {
    return(
        <div className="footerSection">
            <h2 className="footerTitle">The Breaking Bad series</h2>
            <p className="documentation">documentation</p>
            <div className="githublogo">
            <ion-icon name="logo-github"></ion-icon>
            </div>
        </div>
    )
}

export default footer