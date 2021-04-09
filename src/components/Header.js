import React from "react";
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hi, I'm Sai</h1>
                <Typed
                    className="typed-text"
                    strings={["Full Stack Web Developer", "Web Design", "Freelancer"]}
                    typeSpeed={35}
                    backSpeed={60}
                    loop
                />

                <a href="#" className="btn-main-offer"> Contact Me</a>

            </div>
        </div>
    )
}

export default Header
