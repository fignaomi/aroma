import React from "react"
import style from '../../index.module.scss';


function oQueEAromaterapia() {
    return (
        <section>
            <div>
                <h1 className={style.titulo}>O que é aromaterapia</h1>
                <p className={style.conteudo}>
                    A aromaterapia é uma técnica natural que utiliza o aroma
                    e as partículas liberadas por diferentes óleos essenciais para estimular diferentes partes do cérebro, ajudando a:<br></br><br></br>

                        Aliviar os sintomas de ansiedade, insônia, depressão,
                        asma ou resfriado;
                        Promover o bem-estar;
                        Fortalecer as defesas do corpo.
                        Apesar de serem usados produtos naturais,
                        é importante que a aromaterapia seja orientada por um aromaterapeuta, naturopata ou outro profissional especializado, para saber qual o melhor óleo essencial a utilizar em cada caso.
                </p>
            </div>
        </section>
    )
}

export default oQueEAromaterapia