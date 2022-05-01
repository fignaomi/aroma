import React from "react"
import ImagemHome from '../../assets/img/imagem-home.jpg'
import style from '../../index.module.scss';


function Home() {
    return (
        <section>
            <h1 className={style.titulo}>DIVULGAR E INFORMAR
                SOBRE ÓLEOS ESSENCIAIS</h1>
            <div className={style.imagemHome}>
                <img src={ImagemHome} alt="Aroma" />
            </div>
        </section>
    )
}

export default Home