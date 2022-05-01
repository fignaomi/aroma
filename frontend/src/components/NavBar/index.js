import React from "react"
import { Link } from "react-router-dom";
import Logo from '../../assets/img/folha.png'
import style from './NavBar.module.scss';

function Navebar() {
    return (
        <div>
            <div className={style.logo}>
                <img src={Logo} alt="Aroma" />
                <h1>AROMA</h1>
            </div>
            <hr className={style.separador}></hr>
            <nav className={style.navbar}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <div className={style.divisor} role="separator"></div>
                    <li>
                        <Link to="/o-que-e-aromaterapia">O que é aromaterapia</Link>
                    </li>
                    <div className={style.divisor} role="separator"></div>
                    <li>
                        <Link to="/oleos-essenciais">Óleos essenciais</Link>
                    </li>
                    <div className={style.divisor} role="separator"></div>
                    <li>
                        <Link to="/ajuda-para">Ajuda para</Link>
                    </li>
                    <div className={style.divisor} role="separator"></div>
                    <li>
                        <Link to="/referencias-bibliograficas">Referencias bibliograficas</Link>
                    </li>
                    <div className={style.divisor} role="separator"></div>
                    <li>
                        <Link to="/sobre-aroma">Sobre Aroma</Link>
                    </li>
                </ul>
            </nav>
            <hr className={style.separador}></hr>
        </div>
    )
}

export default Navebar