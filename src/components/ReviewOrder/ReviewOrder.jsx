import React, {useContext} from 'react'
import "./reviewOrder.css"
import { CartContext } from '../../context/CartContext';

export const ReviewOrder = () => {
    const {cart, total} = useContext(CartContext)
    const totalPrice = total()

    return (
        <div className="reviewOrder_container">
            <h2>Review of order</h2>
            <ul className="reviewOrder_item">
                {
                    cart.map(
                            (obj, pos) => {
                                return (
                                    <li key={obj.item.productId}>
                                        <div className="reviewOrder_item-info">
                                            <img src={obj.item.picture}></img>
                                            <div className="reviewOrder_p">
                                                <h4>{obj.item.title}</h4>
                                                <p>x {obj.quantity}</p>
                                            </div>
                                            <h4>{obj.item.price * obj.quantity}</h4>
                                        </div>
                                        <hr />
                                    </li>
                                );
                            }
                    )
                }
            </ul>


            <div className="reviewOrder_total">
                <p>Total:</p>
                <h3>${totalPrice}</h3>
            </div>
        </div>
    )
}
