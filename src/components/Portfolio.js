import React from 'react'
import { FaGithub } from "react-icons/fa"
import Burger from "../pictures/burger.png"
import Calendar from "../pictures/calendar.png"
import Cocktail from "../pictures/cocktail.png"
import Code from "../pictures/codeq.png"
import NoteTaker from "../pictures/noteTaker.png"
import Coffee from "../pictures/caffee.png"

function Portfolio() {
    return (
        <div className="portfolio">
            <h1 className="p-y5">Portfolio</h1>
            <section className="port">
                <div className="thumb">
                    <img src={Burger} alt="" />

                    <h5><a href="https://evening-wildwood-75697.herokuapp.com/">JS: Eat-Da-Burger
                        </a></h5>
                    <br /><a href="https://github.com/Saipurciful/burger">  <FaGithub />
                     Code </a>


                </div>

                <div className="thumb" data-id="JS/HTML/CSS">
                    <img src={Calendar} alt="" />

                    <h5> <a href="https://saipurciful.github.io/DailyCalendar/">JS: Daily Calendar
                         </a> </h5> <br /> <a href="https://github.com/Saipurciful/DailyCalendar"><FaGithub />
                         Code </a>


                </div>

                <div className="thumb" data-id="JS/HTML/CSS">
                    <img src={Cocktail} alt="" />

                    <h5><a href="https://samrod777.github.io/Recipe-List-Platform/">
                        JS: Meals Generator</a> </h5> <br /> <a href="https://github.com/samrod777/Recipe-List-Platform"><FaGithub />
                    Code </a>



                </div>

                <div className="thumb" data-id="JS/HTML/CSS">
                    <img src={Code} alt="" />
                    <h5>  <a href="https://saipurciful.github.io/JS-CodeQuiz/">
                        JS: CodeQuiz </a></h5> <br /> <a href="https://github.com/Saipurciful/JS-CodeQuiz"><FaGithub />
                    Code </a>


                </div>

                <div className="thumb" data-id="JS/HTML/CSS">
                    <img src={NoteTaker} alt="" />
                    <h5><a href="https://notetakerapplic.herokuapp.com/">
                        JS: Note Taker</a> </h5> <br /> <a href="https://github.com/Saipurciful/Note-Taker"><FaGithub />
                    Code </a>


                </div>

                <div className="thumb" data-id="Handlebars">
                    <img src={Coffee} alt="" />
                    <h5><a href="https://caffeinparadise2.herokuapp.com/signup.html">HANDLEBAR: Caffeine </a></h5> <br /> <a href="https://github.com/aprilyanggarwood/CaffeinParadise2/tree/Sai"><FaGithub /> Code </a>

                </div>


            </section>

        </div>
    )

}

export default Portfolio