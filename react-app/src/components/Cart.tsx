import React from 'react'

interface CartProp {
    items: string[];
    onClear: () => void; 
}
const Cart = ({items, onClear}: CartProp) => {
  return (
    <>
        <div>Cart</div>
        <ul>
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
        <button onClick={onClear}>Clear!</button>

    </>
    
  )
}

export default Cart