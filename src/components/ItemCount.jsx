import React from 'react';
import '../css/ItemCount.css'

//INCREMENTA O DECREMENTA LA CANT DE UN PRODUCTO

export const ItemCount = ({onCart, onAdd, onSubstract, initial}) => {
    return (
        <div className= "contadorContenedor">
            <div className="botonesCantidad">
                <button className='controladores' onClick= {onSubstract} >-</button>
                <p>{initial}</p>
                <button className='controladores' onClick= {onAdd}>+</button>
            </div>
                <button id='agregarCarrito' onClick={onCart}>Add to cart</button>
        </div>
            )
}