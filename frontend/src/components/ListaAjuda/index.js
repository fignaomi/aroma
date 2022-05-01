import React from 'react';
import style from './Lista.module.scss'
import Item from './Item';

function Lista() {
  return (
    <aside className={style.listaAjuda}>
      <h2 className={style.titulo_card}>Ajuda para</h2>
      <ul>
        <Item/>
      </ul>
    </aside>
  )
}
export default Lista;