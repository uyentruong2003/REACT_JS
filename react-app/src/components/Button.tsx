import React, { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode;
    color?: string; //? means optional property; specified values separated by | --> only those specified allowed for the property
    active?: boolean;
    onClick: () => void;
}
// color default value is set as 'primary'
const Button = ({children, color , onClick}: ButtonProps) => {
  return (
    <button type="button" className={"btn btn-"+color} onClick={onClick} >{children}</button>
  )
}

export default Button