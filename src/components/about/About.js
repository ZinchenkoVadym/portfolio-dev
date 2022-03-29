import React from 'react';
import '../../App.css'
import './About.scss'
import BasicTabs from "../about/tab-container/TabsMU";

const About = () => {

    return (
        <section id='about' className='section section__about'>
            <div className='container container__about'>
                <div className='about__body'>
                    <div className='about__img__container'>
                    <div className='about__img'>
                    </div>
                    </div>
                    <div className='about__me'>
                        <div className='about__text'>
                            <h2> About Me</h2>
                            <p>Hi! My name is Vadym! I’m 26 years old! </p>
                        </div>
                        <div className='about__tabs'>
                            <BasicTabs/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;