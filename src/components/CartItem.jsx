import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext';
import { ItemCount } from './ItemCount';

export const CartItem = ({item})=> {
    /* console.log(item) */
    const {cantidad, producto} = item
    const {removeItem} = useContext(ShopContext)
   
    return (<div>
        <h4>{producto.title}</h4>
        <img src={producto.picture} alt={producto.title} height="200px"></img>
        <p>Price: ${producto.price}</p>
        <p>Quantity: {cantidad}</p>
        <p>Subtotal: ${producto.price * cantidad}</p>
        <button onClick={()=>removeItem(producto.id)}>Remove from cart</button>
    </div>)
}