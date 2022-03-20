import React from 'react';
import '../../App.css'
import './Home.scss'

const Home = () => {
    return (
                <section className='tab_item section__home' id='home'>
                    <div className='container container__home'>
                        <div className='title__home'>
                            <div>
                                <h1>WELCOME TO MY PORTFOLIO</h1>
                                <p>Hi, I'm Zinchenko Vadym <br/>
                                    <span>Front-end Developer </span><br/>
                                    from UA
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
    );
};

export default Home;