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
                        <NavLink to={`/item/${item.id}`}>
                            <Item key={item.id} item={item}/>
                        </NavLink>
                        <AddCart key={item.id} item={item}/>
                    </div>
                )
            })}  
        </div>
        </>
    )
}