import React from 'react';
import { Item } from './Item';
import loading from '../multimedia/loading-cat.gif'

//MAP DEL ITEM (key al elemento)

export const ItemList = ({items}) => {
  
    return (
        <div>
            {items.length > 0 ? items.map(item=>{
                return <Item id={item.id} title={item.title} price={item.price} description={item.description} picture={item.picture} stock={item.stock}/>
            })
            : <img src={loading} alt="Loading"></img>}
        </div>
    )
}