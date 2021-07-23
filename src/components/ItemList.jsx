import React from 'react';
import { Item } from './Item';
import loading from '../multimedia/loading-cat.gif'
import '../css/ItemList.css'
import {NavLink} from 'react-router-dom';

//MAP DEL ITEM (key al elemento)

export const ItemList = ({items}) => {
     console.log(items)
    return (
        <div className="flex">
            {items.length > 0 ? items.map(item=>{
                return (
                    <div>
                        <NavLink to={`/item/${item.id}`} key={item.id}>
                            <Item id={item.id} item={item}/>
                        </NavLink>
                    </div>
                )
            })
            : <img src={loading} alt="Loading" className= "loading" ></img>}
        </div>
    )
}