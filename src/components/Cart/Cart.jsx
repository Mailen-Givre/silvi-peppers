import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext';
import { CartItem } from '../CartItem/CartItem.jsx'
import "./cart.css"


export const Cart = () => {
  /* const {cart, clear, getTotal} = useContext(ShopContext) */
   

    return (
        <div className="cart_content">
          <h1>Your Shopping Cart</h1>
          <p className="cart_deleteAll">Delete all items</p>
          <div className="cart_cartItems">
            <CartItem/>
            <CartItem/>
          </div>

          <p className="cart_total">Final cart value: $100 </p>
          <NavLink className='cart_button-link' to="/checkout"><button className="cart_button cart_checkout">Proceed to checkout</button></NavLink>


{/*           <div className="emptyCart">
            <img src={process.env.PUBLIC_URL + "/multimedia/emptyCart.png"} alt="emptyCart" className="notFound"/>
            <Link className='cart_button-link' to="/category/all"><button className='cart_button'>Continue shopping</button></Link>
          </div> */}
          

{/*           {cart.length > 0 ?
          <>
          {cart.map(item=>{return <CartItem key={item.producto.id} item={item}/>})}
          <p>Total: ${getTotal()} </p>
          <button onClick={clear}>Empty cart</button>
          <button><NavLink to="/checkout">Buy</NavLink></button>
          </>
          : <>
              <p>No products in the cart</p>
              <button><NavLink to="/">Go to the shop</NavLink></button>
            </>} */}
        </div>
    )
}