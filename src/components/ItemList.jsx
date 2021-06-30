import React from 'react';
import { Item } from './Item';
import { ItemDetailContainer } from '../containers/ItemDetailContainer';

//MAP DEL ITEM (key al elemento)

export const ItemList = ({items}) => {
  
    return (
        <div>
            {items.length > 0 ? items.map(item=>{
                return <Item key={item.id} title={item.title} price={item.price} description={item.description} picture={item.picture} stock={item.stock}/>
            })
            : <p>Cargando productos</p>}
            <ItemDetailContainer items={items}/>
        </div>
    )
}