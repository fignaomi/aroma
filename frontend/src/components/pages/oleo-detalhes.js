
import React from 'react';
import api from '../../utils/api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from './Oleo-detalhes.module.scss'



export default function OleoDetails() {
    const { id } = useParams()
    const [oleos, setOleos] = useState([])

    useEffect(() => {
        api.get(`/oleo/${id}`).then((response) => {
            setOleos(response.data.oleo)
            console.log(oleos)
        })
    }, [])


    return (
        oleos.map(item => (
            <section className={styles.oleo_details_container}>
                <div className={styles.oleodetails_header}>
                    <h1 className={styles.titulo}>Conhecendo o oleo: {item.nome_comum}</h1>
                    <p className={styles.conteudo}>Nome científico: {item.nome_cientifico}</p>
                </div>
                <div className={styles.oleo_images}>
                    <img
                        key={'index'}
                        src={`${item.foto}`}
                        alt={'imagem_oleo'}
                    />
                </div>
                <p className={styles.conteudo}>
                    <span >Descrição:</span> {item.descricao}
                </p>
            </section>
        ))
    )
}