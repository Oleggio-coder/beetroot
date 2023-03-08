import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {

    const [burgerClass, setBurgerClass] = useState('burger')
    const [navClass, setNavClass] = useState('nav hide')
    const [isClick, setIsClick] = useState(false)


    function IsClick() {
        if (!isClick) {
            setBurgerClass('burger open')
            setNavClass('nav')
            setIsClick(true)
        } else {
            setBurgerClass('burger')
            setNavClass('nav hide')
            setIsClick(false)
        }
    }


    return (
        <header>
            <div className={burgerClass} onClick={IsClick}>
                <div className="burger__close">❌</div>
                <div className="burger__open">=</div>
            </div>
            <ul className={navClass}>
                <div className="modal">
                    <div className="modal__close" onClick={IsClick}>❌</div>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Abou us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <div className="favorit">
                        0
                    </div>
                </div>

            </ul>

        </header>
    )
}