import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import "./cartItem.css"
import { ItemCount } from '../ItemCount/ItemCount'

export const CartItem = ()=> {
    const {cart,removeFromCart} = useContext(CartContext)
    const remove = (itemId) => {
        removeFromCart(itemId)
    }

    return (
        <ul className="cart_cartItems">
        {
            cart.map(
                (obj, pos) => {
                    return (
                        <li key={obj.item.productId} className="cartItem">
                            <img src={obj.item.picture} alt="product"></img>
                            <div className="cartItem_info">
                                <h4>{obj.item.title}</h4>
                                <div className="cartItem_qty">
                                    <p className="cartItem_price">${obj.item.price}</p>
                                    <ItemCount initial={obj.quantity} stock={obj.item.stock} itemId={obj.item.productId}/>
                                    <p>${obj.item.price * obj.quantity}</p>
                                    <img onClick={() => remove(obj.item.productId)} src= {process.env.PUBLIC_URL + "/multimedia/trash.svg"} alt="removeItem" id="cartItem_remove"/>
                                </div>
                            </div>

                        </li>
                    );
                }
            )
        }
        </ul>
    )
}
