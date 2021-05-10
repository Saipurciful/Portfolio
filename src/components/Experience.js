import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <hr className="hr" />
                        <h3>2018 to Present</h3>
                        <h5>Massage Therapist</h5>
                        <p> <span>Massage Envy, Bellevue, Washington</span></p>
                        <p>
                            High-energy massage therapist with wide-rage knowledge of massage methods.
                        </p>

                    </div>

                </div>


                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <hr className="hr" />
                        <h3>05/2017 to 09/2018</h3>
                        <h5>Massage Therapist</h5>
                        <p> <span>Massage Envy, Las Vegas, Nevada</span></p>
                        <p>
                            High-energy massage therapist with wide-rage knowledge of massage methods.
                        </p>
                    </div>
                </div>

                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <hr className="hr" />
                        <h3>06/2017 to 09/2018</h3>
                        <h5>Massage Therapist</h5>
                        <p> <span>Nuture Spa & Salon, Luxor Hotel & Casino, Las Vegas, NV</span></p>
                        <p>
                            High-energy massage therapist with wide-rage knowledge of massage methods.
                        </p>
                    </div>
                </div>

                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <hr className="hr" />
                        <h3>05/2015 to 06/2017</h3>
                        <h5> HouseKeeping Supervisor</h5>
                        <p> <span>The Service Companies, The Linq Hotel & Casino, Las Vegas, NV</span></p>
                        <p>
                            Manage and coach up to 30 employees in the HouseKeeping Department and collaborate with Engineering, Front Desk and other departments to ensure a smooth operation of all 2,640 guest rooms.
                        </p>
                    </div>
                </div>

                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <hr className="hr" />
                        <h3>01/2006 to 2015</h3>
                        <h5>Nanny</h5>
                        <p> <span>Individual family's home, Austin, TX and Las Vegas, NV</span></p>
                        <p>
                            Responsibilities center on childcare (newborn - fifteen y/o) and functions as the primary authority figure while the parents are away or otherwise occupied. Creative activities to each child's interests, developmental abilities and personality as well as being reliable, trustworthy for the parents to feel entirely comfortable leaving their children with.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
