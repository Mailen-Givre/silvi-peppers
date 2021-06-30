import React from 'react';
import { ItemCount } from "../components/ItemCount";

//INFO DEL PRODUCTO agregar stock
//Poner ItemCount pasar x prop el item.stock

export const Item = ({title,picture,description,stock,price})=> {

    return <>
        <img src={picture} alt="Imagen de producto" height="200px"></img>
        <p>{title}</p>
        <p>{description}</p>
        <p>${price}</p>
        <p>{stock}</p>
        <ItemCount stock={stock} initial={1}/>
    </>
}