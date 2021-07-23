import React from 'react';
import '../css/Item.css'
import { AddCart } from './AddCart';

//INFO DEL PRODUCTO agregar stock

export const Item = ({item})=> {
    const {data} = item
    
    return <div className="item">
        <img src={data.picture} alt="Imagen de producto" height="350px"></img>
        <AddCart/>
        <p>{data.title}</p>
        <p>${data.price}</p>
    </div>
}