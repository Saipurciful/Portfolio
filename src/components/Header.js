import React from "react";
import { Link } from "react-scroll";
import Typed from "react-typed"

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Hi, I'm Sai</h1>
                <Typed
                    className="typed-text"
                    strings={["Full Stack Web Developer", "Freelancer", "Web Designer"]}
                    typeSpeed={35}
                    backSpeed={60}
                    loop
                />

                <Link to="home" href="#" className="btn-main-offer"> Contact Me</Link>

            </div>
        </div>
    )
}

export default Header
