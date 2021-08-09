import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import "./cartItem.css"
import { ItemCount } from '../ItemCount/ItemCount'

export const CartItem = ()=> {
    const {cart,removeFromCart} = useContext(CartContext)
    const {addProduct} = useContext(CartContext)
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
                            <img src={obj.item.picture}></img>
                            <div className="cartItem_info">
                                <h4>{obj.item.title}</h4>
                                <div className="cartItem_qty">
                                    <p className="cartItem_price">${obj.item.price}</p>
                                    <ItemCount initial={obj.quantity} stock={obj.item.stock} itemId={obj.item.productId}/>
                                    <p>${obj.item.price * obj.quantity}</p>
                                    <img onClick={() => remove(obj.item.productId)} src= {process.env.PUBLIC_URL + "/multimedia/trash.svg"} alt="removeItem" id="cartItem_remove"/>
                                </div>
                            </div>

                                    {/* <button onClick={() => { context.removeItem(pos) }} className="cart-item__remove">
                                        <img src={deleteIcon} className="delete-icon" alt="" />
                                    </button> */}

                        </li>
                    );
                }
            )
        }
        </ul>
    )
}
/*             <div className="cartItem">
                <img src={picture}></img>
                <div className="cartItem_info">
                    <h4>{title}</h4>
                    <div className="cartItem_qty">
                        <p className="cartItem_price">${price}</p>
                        <ItemCount />
                        <p>${price * quantity}</p>
                        <img src= {process.env.PUBLIC_URL + "/multimedia/trash.svg"} alt="removeItem" id="cartItem_remove"/>
                    </div>
                </div> */

{/*         <h4>{producto.title}</h4>
        <img src={producto.picture} alt={producto.title} height="200px"></img>
        <p>Price: ${producto.price}</p>
        <p>Quantity: {cantidad}</p>
        <p>Subtotal: ${producto.price * cantidad}</p>
        <button onClick={()=>removeItem(producto.id, cantidad)}>Remove from cart</button> */}
