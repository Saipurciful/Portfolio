import React from 'react'
import Iframe from 'react-iframe';

import resume from "../pictures/resume.pdf"

const Resume = () => {
    return (
        <div id="resume" className="resume">
            <h1 className="py-5"> Resume </h1>

            <div id="resume" >
                <Iframe src={resume} className="pdf" />

            </div>
        </div>
    )
}

export default Resume
