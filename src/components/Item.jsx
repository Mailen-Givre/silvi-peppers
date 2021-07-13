import React from 'react';
import '../css/Item.css'
import { AddCart } from './AddCart';

//INFO DEL PRODUCTO agregar stock

export const Item = ({title,picture,price})=> {

    return <div className="item">
        <img src={picture} alt="Imagen de producto" height="350px"></img>
        <AddCart/>
        <p>{title}</p>
        <p>${price}</p>
    </div>
}