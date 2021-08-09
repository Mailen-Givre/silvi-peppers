import React, {useContext, useState, useEffect} from 'react'
import { CartForm } from '../CartForm/CartForm'
import './checkout.css'
import { ReviewOrder } from '../ReviewOrder/ReviewOrder'
import { CartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase/client'
import firebase from "firebase/app"
import { Order } from '../Order/Order';

export const Checkout = () => {
    const {total, cart} = useContext(CartContext)
    const [userInfo, setUserInfo] = useState()
    const [orderId, setOrderId] = useState("")


    return (
        <div className="checkout_container">
        <CartForm cart={cart} total={total} />
        <ReviewOrder/>
{/*         { orderId &&
            <Order userInfo={userInfo} cart={cart} orderId={orderId} />} */}
        </div>
    )
}
