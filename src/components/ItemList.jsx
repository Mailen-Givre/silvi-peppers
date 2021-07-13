import React from 'react';
import { Item } from './Item';
import loading from '../multimedia/loading-cat.gif'
import '../css/ItemList.css'
import {NavLink} from 'react-router-dom';

//MAP DEL ITEM (key al elemento)

export const ItemList = ({items}) => {
  
    return (
        <div className="flex">
            {items.length > 0 ? items.map(item=>{
                return <NavLink to={`/item/${item.id}`}><Item id={item.id} title={item.title} price={item.price} description={item.description} picture={item.picture} stock={item.stock}/></NavLink>
            })
            : <img src={loading} alt="Loading" className= "loading" ></img>}
        </div>
    )
}