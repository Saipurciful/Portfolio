import React from "react";
import { Link } from "react-scroll";
import Typed from "react-typed"

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Hello, I'm </h1>
                <h1>Su·thun·ya Purciful</h1>
                <Typed
                    className="typed-text"
                    strings={["Front-end Developer", "Full Stack Web Developer", "Freelancer"]}
                    typeSpeed={30}
                    backSpeed={60}
                    loop
                />

                <Link smooth={true} to="contact" offset={-70} href="#" className="btn-main-offer"> Contact Me</Link>

            </div>
        </div>
    )
}

export default Header
