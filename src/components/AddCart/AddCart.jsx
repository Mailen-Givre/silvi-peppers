import './addCart.css'
import React, {useState, useEffect, useContext} from 'react';
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from '../../context/CartContext';

export const AddCart = (id, item)=> {
    console.log()
    const [isActive, setActive] = useState(true);
    const context = useContext(CartContext)
    
    
    const toggleClass = () => {
        setActive(!isActive);
        console.log(isActive)
    };
    const stock = id.item.stock

    return (
        <div className="relative">
        <div className="addCart_position" id={isActive ? "addCart_noactive": "addCart_active"}>
            <div className="addCart" onClick={toggleClass}>
                <img src= {process.env.PUBLIC_URL + "/multimedia/cart.svg"} alt="cart" className='cart'/>
                <p className={isActive ? "appear addCart_text": "disappear addCart_text"}>Add to cart</p>
            </div>
            <div className={isActive ? 'disappear addCart_count': 'appear addCart_count'}>
            <ItemCount initial={1} stock={stock} />
            </div>
            
        </div>
        </div>
    )
}