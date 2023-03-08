import { useState } from 'react'

import { Link } from 'react-router-dom'
import { MobileView, isMobile } from 'react-device-detect';

import './index.css'

export default function Header() {

    const [burger_class, setBurgerClass] = useState('header__gamb burger-icon')
    const [menu_class, setMenuClass] = useState('header__nav-item hide')

    console.log(isMobile + ' Mobile');
    console.log(!isMobile + ' Desktop');
    return (
        <header>
            <div className="header__container">
                <div className="logo">LOgo</div>
                <nav className='header__nav'>

                    <MobileView className={burger_class}>
                        <div className="header__gamb-item">X</div>
                    </MobileView>

                    <ul className={menu_class}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/contactewrtert'>Dffeee</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}