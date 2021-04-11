
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll"


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <Link smooth={true} to="home" className="navbar-brand" href="#">

                    <h1 py-5>Sai Purciful </h1>

                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                    <FontAwesomeIcon icon={faBars} style={{ color: "#ffff" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about" offset={-70} className="nav-link" href="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="experience" offset={-70} className="nav-link" href="#">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" offset={-70} className="nav-link" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contact" offset={-70} className="nav-link" href="#">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} className="nav-link" to="resume" offset={-70} href="#">Resume</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar