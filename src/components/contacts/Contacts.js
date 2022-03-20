import React from 'react';
import './Contacts.scss'

const Contacts = () => {
    return (
        <section id='contacts' className='tab_item section__contacts'>
            <div className='container container__contacts'>
                <div className='contacts__form'>
                    <div className='contacts__form__body'>
                            <div className='text__form'>
                                <h3>Hire Me.</h3>
                                <p>I am available for work. Connect with me via phone: 0939664520 or email:
                                    zinchenkovadym@gmail.com</p>
                            </div>
                            <div>
                                <form type='submit' className='form'>
                                    <input className='input__form' placeholder='Your Name*' type="text"/>
                                    <input className='input__form' placeholder='Your Email*' type="text"/>
                                    <input className='input__form' placeholder='Write a Subject' type="text"/>
                                    <textarea className='textarea__form' placeholder='Your Message'>
                            </textarea>
                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                </div>
                <div className='contacts__img'>
                </div>
            </div>
        </section>
    );
};

export default Contacts;