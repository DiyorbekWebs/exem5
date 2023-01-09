import React from "react"
import stil from './button.module.scss';
export default function Button({className,type='button', id, style, onclick,children}) {
  return (
    <button className={stil.button} type={type} id={id} style={style} onClick={onclick}>
      {children}
    </button>
  )
}
