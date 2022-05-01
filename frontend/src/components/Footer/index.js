import React from "react"
import {Link} from "react-router-dom";
import style from './Footer.module.scss';

function Footer(){
 return(
   <footer className={style.footer}>
      <p><span className="bold">Aroma</span> &copy; 2022</p> 
   </footer>
 )
}

export default Footer