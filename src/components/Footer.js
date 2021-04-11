
import { faFileCode, faHome, faIdCard, faPhoneSquare, faUserAlt, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-scroll'


const Footer = () => {
    return (
        <div className="footer fixed-bottom">
            <div className="container pt-2">
                <div className="row">

                    <p className="pt-2">
                        Copyright &copy; {new Date().getFullYear()}&nbsp; Sai Purciful | Created by React.js
                 </p>


                    <div className="circle  ml-auto">
                        <Link to="home" smooth={true} offset={-70}><FontAwesomeIcon icon={faHome} size="2x" className="icon" /> </Link>
                    </div>

                    <div className="circle">
                        <Link to="about" smooth={true} offset={-70}><FontAwesomeIcon icon={faUserAlt} size="2x" className="icon" /> </Link>
                    </div>

                    <div className="circle">
                        <Link to="experience" smooth={true} offset={-70}><FontAwesomeIcon icon={faIdCard} size="2x" className="icon" /> </Link>
                    </div>
                    <div className="circle">
                        <Link to="portfolio" smooth={true} offset={-70}><FontAwesomeIcon icon={faFileCode} size="2x" className="icon" /> </Link>
                    </div>
                    <div className="circle">
                        <Link to="contact" smooth={true} offset={-70}><FontAwesomeIcon icon={faPhoneSquare} size="2x" className="icon" /> </Link>
                    </div>
                    <div className="circle">
                        <Link to="resume" smooth={true} offset={-70}><FontAwesomeIcon icon={faUserGraduate} size="2x" className="icon" /> </Link>
                    </div>








                </div>
            </div>
        </div >
    )
}

export default Footer
