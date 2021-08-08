import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';
import './cartWidget.css'
import { CartIcon } from '../../svg/CartIcon'

export const CartWidget = () => {
    const {cart, cartCounter} = useContext(CartContext)
    const cartItems = cartCounter()
    cart.length && cartCounter()
    console.log(cart)
    return (
        <>
        <NavLink to="/cart" id="cartWidget" activeClassName='NavIconActive'>
        <div className="menu_cart">
            <CartIcon/>
            <div className="cart_count">{cartItems ? cartItems : 0}</div>
        </div>

        </NavLink>;   
        </>
    )
}