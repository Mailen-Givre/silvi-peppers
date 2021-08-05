import React from 'react';
import './Item.css'
import { AddCart } from '../AddCart/AddCart';

//INFO DEL PRODUCTO agregar stock

export const Item = ({item})=> {
    const {data} = item
    
    return <div className="item">
        <img src={data.picture} alt="Imagen de producto" className="item_img"></img>
        <AddCart/>
        <p id="item_title">{data.title}</p>
        <p id="item_price">$ {data.price}</p>
    </div>
}