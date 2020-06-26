import React from 'react'
import './Footer.css'

const footer = () => {
    return(
        <div className="footerSection">
            <h2 className="footerTitle">The Breaking Bad series</h2>
            <a target="/" href="https://breakingbadapi.com/documentation" className="documentation">documentation</a>
            <a target="/" className="githublogo" href="https://github.com/abhimestri/Breaking-Bad">
                    <ion-icon name="logo-github"></ion-icon>
            </a>
        </div>
    )
}

export default footer