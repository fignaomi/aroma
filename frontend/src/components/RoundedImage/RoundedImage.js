import React from "react"
import style from './RoundedImage.module.scss';

function RoundedImage({ src, alt, width }) {
    return (
        <img
            className={`${style.rounded_image} ${style[width]}`}
            scr={src}
            alt={alt}
        />
    )
}

export default RoundedImage