import React from "react";
import sai from "../22.png"

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={sai} alt="sai" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium culpa soluta maiores corporis labore laboriosam, deleniti exercitationem dolorem odit nostrum!lorem30

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem adipisci sed explicabo nobis esse aspernatur nemo maiores exercitationem? Error sapiente nulla quisquam incidunt. Commodi reiciendis quos architecto ad obcaecati.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default AboutMe
