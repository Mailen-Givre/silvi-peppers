import React, {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext';
import "./cartItem.css"
import { ItemCount } from '../ItemCount/ItemCount'

export const CartItem = ()=> {
    const {cart,removeFromCart,changeQuantity,change} = useContext(CartContext)
    const [edit, setEdit] = useState(false)

    const remove = (itemId) => {
        removeFromCart(itemId)
    }

    const save = (itemId, change) =>{
        changeQuantity(itemId, change)
        setEdit(false)
    }
    
    return (
        <ul className="cart_cartItems">
        {
            cart.map(
                (obj) => {
                    return (
                        <li key={obj.item.productId} className="cartItem">
                            <img src={obj.item.picture} alt="product"></img>
                            <div className="cartItem_info">
                                <h4>{obj.item.title}</h4>
                                <div className="cartItem_qty">
                                    <p className="cartItem_price">${obj.item.price}</p>
                                    <div className={!edit ? 'appear' : 'disappear'}>
                                        <div className=" cart_quantity">
                                            <p>x{obj.quantity}</p>
                                            <button className="cart_edit" onClick={() => setEdit(true)}>Edit</button>
                                        </div>
                                    </div>
                                    <div className={edit ? 'appear' : 'disappear'}>
                                        <div className="cart_quantity cart_quantity-size">
                                            <ItemCount initial={obj.quantity} stock={obj.item.stock} itemId={obj.item.productId}/>
                                            <button className="cart_save" onClick={() => save(obj.item.productId, change)} >Save</button>
                                        </div>
                                    </div>
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
