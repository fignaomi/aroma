import React from 'react';
import style from './Lista.module.scss'
import Item from './Item';

function Lista() {
  return (
    <aside className={style.listaOleos}>
      <h2 className={style.titulo_card}>Óleos essenciais</h2>
      <ul>
        <Item />
      </ul>
    </aside>
  )
}
export default Lista;