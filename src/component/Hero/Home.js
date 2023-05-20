import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <br />
                        <h3>LET ME TELL YOU A LITTLE ABOUT ME</h3>
                        <h1>
                            Hi, I’m <span>Okobi Charles</span>
                        </h1>
                        <h2>
                            <span>
                                <Typewriter words={[" a Programmer.", " a Developer.", " an Engineer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                            </span>
                        </h2>

                        <p>Charles is foremost an engineer with a strong science background. He came online in 2003 with a Computer Appreciation and Graphic Design Certification. As an Internet enthusiast and entrepreneur, he is involved in other digital activities to earn a living online.</p>

                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>CONNECT WITH ME</h4>
                                <div className='button'>
                                    <button className='btn_shadow'>
                                        <i class='fab fa-github'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i class='fab fa-codepen'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i class='fab fa-linkedin-in'></i>
                                    </button>
                                </div>
                            </div>
                            <div className='col_1'>
                                <h4>BEST SKILL ON</h4>
                                <button className='btn_shadow'>
                                    <img src={skill1} alt='react' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill2} alt='javascript' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill3} alt='photoshop' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='right_img'>
                            <img src={hero} alt='hero pic' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home