import React from "react";
import { Card } from "react-bootstrap";
import sai from "../pictures/22.png"

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <h1 className="about-heading">About Me</h1>
            <div className="row">
                <Card className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={sai} alt="sai" />
                    </div>
                </Card>
                <div className="col-lg-6 col-xm-12">

                    <p>Successful professional with a bachelor’s degree in hotel management, two years of experience in
                large-scale hotel management, and four years of experience as a licensed massage therapist. </p>
                    <p> Seeking a career change to a full-stack web developer for a fast-paced company with big goals that I can
                    be a part of. Driven self-starter and lifelong learner who tackles difficult tasks with a team-player
                attitude.</p>

                </div>
            </div>
        </div>
    )
}

export default AboutMe
