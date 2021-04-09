import React from "react";
import project from "../mb.jpeg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
    return (

        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={project} alt="project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    {/* - */}

                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={project} alt="project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    {/* - */}

                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={project} alt="project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    {/* - */}

                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={project} alt="project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                </div>
            </div >
        </div >

    )
}

export default Portfolio
