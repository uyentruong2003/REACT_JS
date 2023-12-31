import React, { ReactNode } from 'react'
import styles from './Button.module.css';

interface ButtonProps {
    children: ReactNode;
    color?: string; //? means optional property; specified values separated by | --> only those specified allowed for the property
    onClick: () => void;
}

// styling from Bootstrap===========
// color default value is set as 'primary'
// const Button = ({children, color , onClick}: ButtonProps) => {
//   return (
//     <button type="button" className={"btn btn-"+color} onClick={onClick} >{children}</button>
//   )
// }


// styling from vanilla CSS==========
const Button = ({children, color , onClick}: ButtonProps) => {
  return (
    <button type="button" className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick} >{children}</button>
  )
}

export default Button