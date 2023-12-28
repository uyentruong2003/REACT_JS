// shortcut to create a new react component: rafce
import React, { ReactNode } from 'react'

interface AlertProps {
    // pass a child (html content) into the component
    children: ReactNode;
    visible: boolean;

}
const Alert = ({children, visible}: AlertProps) => {

    return ( visible===false ? null :
    <div className="alert alert-primary" role="alert">
        {children}
    </div>
    )
}

export default Alert