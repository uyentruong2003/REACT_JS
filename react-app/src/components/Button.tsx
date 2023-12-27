import React, { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'warning' | 'danger'; //? means optional property; only the values specified will be allowed for the property
    handleOnClick: () => void;
}
// color default value is set as 'primary'
const Button = ({children, color = 'primary', handleOnClick}: ButtonProps) => {
  return (
    <button type="button" className={"btn btn-"+color} onClick={handleOnClick}>{children}</button>
  )
}

export default Button