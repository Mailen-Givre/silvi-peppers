import React from 'react';

export const ItemDetail = ({title,picture,description,stock,price})=> {

    return <>
        <h4>Detalles de producto</h4>
        <img src={picture} alt="Imagen de producto" height="200px"></img>
        <p>{title}</p>
        <p>{description}</p>
        <p>${price}</p>
        <p>{stock}</p>
    </>
}