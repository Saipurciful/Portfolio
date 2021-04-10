import React from "react";
import project from "../backg.png"
import mb from "../22.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import { PopupboxContainer, PopupboxManager } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"

const Portfolio = () => {

    // Magnificent Beasts
    const openPopupboxMagnificent = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={project} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, debitis.</p><b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Saipurciful")}>https://github.com/Saipurciful</a>
            </>
        )
        PopupboxManager.open({ content })

    }

    const popupboxConfigMagnificent = {
        titleBar: {
            enable: true,
            text: "Magnificent Beasts Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Second Beasts
    const openPopupboxSecond = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={mb} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, debitis.</p><b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Saipurciful")}>https://github.com/Saipurciful</a>
            </>
        )
        PopupboxManager.open({ content })

    }

    const popupboxConfigSecond = {
        titleBar: {
            enable: true,
            text: "Second Beat Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Third project
    const openPopupboxThird = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={project} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, debitis.</p><b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Saipurciful")}>https://github.com/Saipurciful</a>
            </>
        )
        PopupboxManager.open({ content })

    }

    const popupboxConfigThird = {
        titleBar: {
            enable: true,
            text: "Third Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Fourth project
    const openPopupboxFourth = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={project} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, debitis.</p><b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Saipurciful")}>https://github.com/Saipurciful</a>
            </>
        )
        PopupboxManager.open({ content })

    }

    const popupboxConfigFourth = {
        titleBar: {
            enable: true,
            text: "Fourth Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (

        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">

                    <div className="portfolio-image-box" onClick={openPopupboxMagnificent}>
                        <img className="portfolio-image" src={project} alt="project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>



                    <div className="portf   olio-image-box" onClick={openPopupboxSecond}>
                        <img className="portfolio-image" src={mb} alt="project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    {/* - */}

                    <div className="portfolio-image-box" onClick={openPopupboxThird}>
                        <img className="portfolio-image" src={project} alt="project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    {/* - */}

                    <div className="portfolio-image-box" onClick={openPopupboxFourth}>
                        <img className="portfolio-image" src={project} alt="project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                </div>
            </div >
            <PopupboxContainer {...popupboxConfigMagnificent} />
            <PopupboxContainer {...popupboxConfigSecond} />
            <PopupboxContainer {...popupboxConfigThird} />
            <PopupboxContainer {...popupboxConfigFourth} />
        </div >

    )
}

export default Portfolio
