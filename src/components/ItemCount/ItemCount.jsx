import React, {useContext} from 'react';
import './ItemCount.css';


//INCREMENTA O DECREMENTA LA CANT DE UN PRODUCTO

export const ItemCount = ({onCart, onAdd, onSubstract, initial, product}) => {
    return (
        <div className= "contadorContenedor">
            <div className="botonesCantidad">
                <button className='controladores' onClick= {onSubstract} >-</button>
                <p>{initial}</p>
                <button className='controladores' onClick= {onAdd}>+</button>
            </div>
                <button id='agregarCarrito' onClick={()=>{onCart(product)}}>Add to cart</button>
        </div>
            )
}