// shortcut to create a new react component: rafce

import React, { ReactNode } from 'react'

interface AlertProps {
    // pass a children (html content) into the component
    children: ReactNode;
}
const Alert = ({children}: AlertProps) => {
  return (
    <div className="alert alert-primary" role="alert">
        {children}
    </div>
  )
}

export default Alert