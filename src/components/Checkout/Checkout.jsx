import React, {useContext } from 'react'
import { CartForm } from '../CartForm/CartForm'
import './checkout.css'
import { ReviewOrder } from '../ReviewOrder/ReviewOrder'
import { CartContext } from '../../context/CartContext';

export const Checkout = () => {
    const {total, cart} = useContext(CartContext)

    return (
        <div className="checkout_container">
            <CartForm cart={cart} total={total} />
            {cart!=0 ? <ReviewOrder/> : null }
        </div>
    )
}
