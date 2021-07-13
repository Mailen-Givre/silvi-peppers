import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import cart from '../multimedia/cart.svg'
import { NavLink } from 'react-router-dom';

export const CartWidget = () => {
    const {quantityB} = useContext(ShopContext)
    

    return (
        <>
        <NavLink to="/cart" id="cartWidget">
        <img src= {cart} alt="cart" className="menu__imgs"/>
        <b>{quantityB}</b>
        </NavLink>;   
        </>
    )
}