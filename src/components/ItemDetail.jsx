import React from 'react';
import { ItemCount } from "../components/ItemCount";
export const ItemDetail = ({picture,title,description,price,stock})=> {

    return <>
        <img src={picture} alt="Imagen de producto" height="200px"></img>
        <p>{title}</p>
        <p>{description}</p>
        <p>precio: ${price}</p>
        <p>stock: {stock}</p>
        <ItemCount stock={stock} initial={1}/>
    </>
}