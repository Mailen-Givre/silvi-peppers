import React, {useContext} from 'react'
import { ShopContext } from '../../context/ShopContext'
import { NavLink } from 'react-router-dom';
import './cartWidget.css'

export const CartWidget = () => {
    const {quantityB} = useContext(ShopContext)
    

    return (
        <>
        <NavLink to="/cart" id="cartWidget">
        <div className="menu_cart">
            <svg className="menu__imgs-cart" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 46.5 53.4" width="30">
            <title>Cart</title>
            <g id="Capa_1">
                <path stroke="black" stroke-width="4%" fill="black" class="st0" d="M41.9,48.5l-2.8-30.7c-0.1-0.8-0.8-1.5-1.6-1.5h-5.7v-2.6c0-4.8-3.9-8.7-8.7-8.7c-4.8,0-8.7,3.9-8.7,8.7v2.6
                    H8.8c-0.8,0-1.6,0.6-1.6,1.5L4.4,48.7c0,0.5,0.1,0.9,0.4,1.2c0.3,0.3,0.7,0.5,1.2,0.5h34.3l0,0c0.9,0,1.6-0.7,1.6-1.6
                    C41.9,48.7,41.9,48.6,41.9,48.5z M17.7,13.8c0-3,2.4-5.4,5.4-5.4s5.4,2.4,5.4,5.4v2.6H17.7V13.8z M7.8,47.2l2.5-27.6h4.2v2.9
                    c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6v-2.9h10.8v2.9c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6v-2.9H36l2.5,27.6H7.8L7.8,47.2z"/>
            </g>
            <g id="Relleno">
                <path fill="white" class="st1" d="M7.8,47.2l2.5-27.6h4.2v2.9c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6v-2.9h10.8v2.9c0,0.9,0.7,1.6,1.6,1.6
                    s1.6-0.7,1.6-1.6v-2.9H36l2.5,27.6H7.8L7.8,47.2z"/>
            </g>
            </svg>
            <div class="cart_count">{quantityB}</div>
        </div>

        </NavLink>;   
        </>
    )
}