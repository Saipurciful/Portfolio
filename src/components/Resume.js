import React from 'react'
import Iframe from 'react-iframe';

import resume from "../pictures/resume.pdf"

const Resume = () => {
    return (


        <div id="resume" >
            <Iframe src={resume} className="pdf" />

        </div>

    )
}

export default Resume
