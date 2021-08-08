import React, {useContext} from 'react'
import { ShopContext } from '../../context/ShopContext';
import "./cartItem.css"
import { ItemCount } from '../ItemCount/ItemCount'

export const CartItem = ({item})=> {
/*     const {cantidad, producto} = item
    const {removeItem} = useContext(ShopContext) */
   
    return (<div className="cartItem">
                <img src="https://firebasestorage.googleapis.com/v0/b/silvipeppers-39d4f.appspot.com/o/beautiful_boys.jpg?alt=media&token=b31b2ed9-7a5c-4848-9f6f-7131d9910c2e"></img>
                <div className="cartItem_info">
                    <h4>Beautiful Boys</h4>
                    <div className="cartItem_qty">
                        <p className="cartItem_price">$150</p>
                        <ItemCount/>
                        <p>$300</p>
                        <img src= {process.env.PUBLIC_URL + "/multimedia/trash.svg"} alt="removeItem" id="cartItem_remove"/>
                    </div>
                </div>

{/*         <h4>{producto.title}</h4>
        <img src={producto.picture} alt={producto.title} height="200px"></img>
        <p>Price: ${producto.price}</p>
        <p>Quantity: {cantidad}</p>
        <p>Subtotal: ${producto.price * cantidad}</p>
        <button onClick={()=>removeItem(producto.id, cantidad)}>Remove from cart</button> */}
    </div>)
}