import React from 'react';

export const Item = ({item})=> {
    console.log(item);

    return <>
        <img src={item.pictureURL} alt="Imagen de producto" height="200px"></img>
        <p>{item.title}</p>
        <p>{item.description}</p>
        <p>${item.price}</p>
    </>
}