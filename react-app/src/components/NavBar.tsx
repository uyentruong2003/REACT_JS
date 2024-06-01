import React from 'react'

interface NavBarProp {
    cartItemCount: number
}

const NavBar = ({cartItemCount} : NavBarProp) => {
  return (
    <div>NavBar: {cartItemCount}</div>
  )
}

export default NavBar