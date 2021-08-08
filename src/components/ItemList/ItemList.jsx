import React from 'react';
import { Item } from '../Item/Item';
import './ItemList.css'
import {NavLink} from 'react-router-dom';
import { AddCart } from '../AddCart/AddCart';

export const ItemList = ({items}) => {
    items.sort((a, b) => (a.title > b.title) ? 1 : -1)
    

   return (<>
        <div className="flex">
            { items.map((item)=>{
                return (
                    <div className="items">
                        <NavLink to={`/item/${item.id}`} key={item.id}>
                            <Item id={item.id} item={item}/>
                        </NavLink>
                        <AddCart id={item.id} item={item}/>
                    </div>
                )
            })}  
        </div>
        </>
    )
}