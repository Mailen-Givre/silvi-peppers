import React from 'react';
import {NavLink} from 'react-router-dom';

//INFO DEL PRODUCTO agregar stock

export const Item = ({title,picture,stock,price,id})=> {

    return <>
        <img src={picture} alt="Imagen de producto" height="200px"></img>
        <p>{title}</p>
        <p>Price ${price}</p>
        <p>Stock: {stock}</p>
        <button>
            <NavLink to={`/item/${id}`}>See more</NavLink>
        </button>
    </>
}