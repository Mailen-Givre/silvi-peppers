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
                    <div className="items" key={item.id}>
                        <NavLink to={`/item/${item.id}`}>
                            <Item item={item}/>
                        </NavLink>
                        <AddCart item={item}/>
                    </div>
                )
            })}  
        </div>
        </>
    )
}