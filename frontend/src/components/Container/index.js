import React from "react"
import {Link} from "react-router-dom";
import style from './Container.module.scss';

function Container({children}){
 return(
   <main className={style.container}>{children}</main>
 )
}

export default Container