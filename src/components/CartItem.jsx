import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext';

export const CartItem = ({item})=> {
    const {cantidad, producto} = item
    const {removeItem} = useContext(ShopContext)
   
    return (<div>
        <h4>{producto.title}</h4>
        <img src={producto.picture} alt={producto.title} height="200px"></img>
        <p>Price: ${producto.price}</p>
        <p>Quantity: {cantidad}</p>
        <p>Subtotal: ${producto.price * cantidad}</p>
        <button onClick={()=>removeItem(producto.id, cantidad)}>Remove from cart</button>
    </div>)
}