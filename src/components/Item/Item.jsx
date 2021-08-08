import React from 'react';
import './Item.css'

export const Item = ({item})=> {
    
    return <div className="item">
        <img src={item.picture} alt={item.title} className="item_img"></img>
        <p id="item_title">{item.title}</p>
        <p id="item_price">$ {item.price}</p>
    </div>
}