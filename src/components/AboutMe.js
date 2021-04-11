import React from "react";

import sai from "../pictures/22.png"

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <h1 className="about-heading">About Me</h1>
            <div className="row">
                <div className="col-lg-6    col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={sai} alt="sai" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">

                    <p>
                        Successful professional with a bachelor's degree in hotel management, two years of experience in large-scale hotel environment, four years of experience as a licensed massage therapist.
                </p>
                    <p>
                        Seeking a career change to a full-stack web developer for a fast-paced company with big goals that I can be a part of. Driven self-starter and lifelong learner who tackles difficult tasks with a team-player attitude.
                </p>
                    <p>
                        Customer-focused consultation, problem-solving and hospitality skills for diverse clients and environments. High dependability, punctuality, and team work ethics to achieve the company's common goals.
                </p>

                </div>
            </div>
        </div>
    )
}

export default AboutMe
