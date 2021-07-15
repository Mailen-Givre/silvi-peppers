import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { CartItem } from './CartItem.jsx'

export const Cart = () => {
  const {cart, clear, getTotal} = useContext(ShopContext)
   

    return (
        <div className="cart">
          {cart.length > 0 ?
          <>
          {cart.map(item=>{return <CartItem key={item.producto.id} item={item}/>})}
          <p>Total: ${getTotal()} </p>
          <button onClick={clear}>Empty cart</button>
          </>
          : <>
              <p>No products in the cart</p>
              <button><NavLink to="/">Go to the shop</NavLink></button>
            </>}
        </div>
    )
}