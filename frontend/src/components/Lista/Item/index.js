
import React from 'react';
import api from '../../../utils/api'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import style from './Item.module.scss';



export default function Item() {

  const [oleos, setOleos] = useState([])

  useEffect(() => {
    api.get('/').then((response) => {
      setOleos(response.data.oleos)
     
    })
  }, [])


  return (
    oleos.map(item => (
    <li className={style.itemOleo}
      value={item.nome_comum} >  <Link to={`/oleo-detalhes/${item.id_oleo}`}>{item.nome_comum}</Link>
    </li>
    ))
  )
}