
import React from 'react';
import api from '../../../utils/api'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import style from './Item.module.scss';

export default function Item() {

  const [listaAjuda, setAjuda] = useState([])

  useEffect(() => {
    api.get('/listaAjuda').then((response) => {
      setAjuda(response.data.detalhes)
    })
  }, [])


  return (
    listaAjuda.map(item => (
    <li className={style.itemAjuda}
      value={item.titulo} >  <Link to={`/ajuda-detalhes/${item.id_sintoma}`}>{item.titulo}</Link>
    </li>
    ))
  )
}