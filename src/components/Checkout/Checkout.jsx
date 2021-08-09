import React, {useContext, useState} from 'react'
import { CartForm } from '../CartForm/CartForm'
import './checkout.css'
import { ReviewOrder } from '../ReviewOrder/ReviewOrder'

export const Checkout = () => {


    return (
        <div className="checkout_container">
        <CartForm/>
        <ReviewOrder/>
        </div>
    )
}
