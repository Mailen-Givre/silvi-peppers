import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartItem } from '../CartItem/CartItem.jsx'
import { CartContext } from '../../context/CartContext';
import "./cart.css"


export const Cart = () => {
  
  const {total, clearCart, cart} = useContext(CartContext)
  
  const totalPrice = total()



    return (
        <div className="cart_content">
          <h1>Your Shopping Cart</h1>
          {cart.length > 0 ?
          <>
          <p onClick={clearCart} className="cart_deleteAll">Delete all items</p>
          <CartItem/>

          <p className="cart_total">Final cart value: {totalPrice} </p>
          <NavLink className='cart_button-link' to="/checkout"><button className="cart_button cart_checkout">Proceed to checkout</button></NavLink>
          </>
          : <>
              <img src={process.env.PUBLIC_URL + "/multimedia/emptyCart.png"} alt="404" className="notFound"/>
            </>} 
        </div>
    )
}