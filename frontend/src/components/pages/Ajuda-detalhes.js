
import React from 'react';
import api from '../../utils/api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from './Ajuda-detalhes.module.scss'



export default function AjudaDetails() {
    const { id } = useParams()
    const [detalhes, setDetalhes] = useState([])


    useEffect(() => {
        api.get(`/detalhesSintomas/${id}`).then((response) => {
            setDetalhes(response.data.detalhes)
        })
    }, [])


    return (
        detalhes.length > 0 ?
            detalhes.map((elem, index) =>

                <section className={styles.ajuda_details_container}>

                    <div className={styles.ajudadetails_header}>
                        <h1 className={styles.titulo}>{index == 0 ? `Titulo: ${elem.titulo} ` : ''}</h1>
                        <p className={styles.conteudo}>Oleo: {elem.oleo}</p>
                        <p className={styles.conteudo}>{index == 0 ? `Procedimento: ${elem.procedimento} ` : ''}</p>
                    </div>
                </section>


            )
            :
            <section className={styles.ajuda_details_container}>
                <h1 className={styles.titulo}> Dados não cadastrados.</h1>
            </section>
    )
}