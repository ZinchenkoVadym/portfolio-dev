import React from 'react';
import '../../App.css';
import './About.scss';
import BasicTabs from './tab-container/TabsMU';

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
                            <p>Hi! My name is Vadym! I became interested in programming two years ago, it was just for
                                fun. At first, it was a regular layout, and then I became interested in java-script
                                programming. Finally, I decided to change my main activity 2 months ago, resigned, and
                                spend all my time learning to program. I want to find my first company where I will work
                                and self-study tirelessly.
                            </p>
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