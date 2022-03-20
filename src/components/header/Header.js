import React, {useState} from 'react';
import '../../App.css'
import './Header.scss'

const Header = () => {
    let [active, setActive] = useState(false);
    let navItem = [
        {
            href: '#home',
            name: 'Home'
        },
        {
            href: '#about',
            name: 'About'
        },
        {
            href: '#projects',
            name: 'Projects'
        },
        {
            href: '#contacts',
            name: 'Contacts'
        }

    ];

    let activeBurger = ['span_burger']
    let activeMenu = ['menu']
    if (active) {
        activeBurger.push('active_burger')
        activeMenu.push('active')
    }

    return (
        <header className='header'>
            <div className='container container__header' onClick={() => {setActive(!active)}}>
                <div className='header__logo'>Portfolio</div>
                <div><div className="burger">
                        <span className={activeBurger.join(' ')}>
                        </span>
                    </div>
                    <ul className={activeMenu.join(' ')}>
                        {navItem.map((e) => {
                            return <li
                                key={e.name}
                                onClick={() => setActive(!active)}
                            >
                                <a href={e.href}>{e.name}</a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;