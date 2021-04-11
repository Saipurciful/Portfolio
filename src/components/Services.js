import { faDesktop, faFileCode, faLaptopCode, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5"> My Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                            <h3>Full Stack Web Developer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nesciunt?</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                            <h3>Full Stack Web Developer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, obcaecati.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faLaptopCode} size="2x" /></div>
                            <h3>Web Design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, velit!.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faLightbulb} size="2x" /></div>
                            <h3>Freelancer</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsa?</p>
                        </div>
                    </div>
                    {/* - */}
                </div>
            </div>

        </div >
    )
}

export default Services
