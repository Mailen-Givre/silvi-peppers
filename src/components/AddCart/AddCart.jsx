import './addCart.css'
import React, {useState, useContext} from 'react';
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from '../../context/CartContext';

export const AddCart = (id, item)=> {
    
    const [isActive, setActive] = useState(true);
    const {addProduct} = useContext(CartContext)
/*     const [addItems, setAddItems] = useState(0) */
    const [addActive, setAddActive] = useState(false)
    const [addQ, setAddQ] = useState(0)     

    const toggleClass = () => {
        setActive(!isActive);
    };
    const stock = id.item.stock
    

    const onCart = (counter) => {     
/*         setAddItems(counter) */
        /* addProduct(item, addItems) */
        addProduct(id.item, counter)
        setAddActive(true)
        setAddQ(counter)
      }

    return (
        <div className="relative">
        <div className="addCart_position" id={isActive ? "addCart_noactive": "addCart_active"}>
            <div className="addCart" onClick={toggleClass}>
                <img src= {process.env.PUBLIC_URL + "/multimedia/cart.svg"} alt="cart" className='cart'/>
                <p className={isActive ? "appear addCart_text": "disappear addCart_text"}>Add to cart</p>
            </div>
            <div className={!isActive && !addActive ? 'appear addCart_count' : 'disappear addCart_count'}>
                <ItemCount initial={1} item={item} stock={stock} onCart={onCart} />
            </div>
            <div className={!isActive && addActive ? 'appear addCart_count' :'disappear addCart_count'}>
                <p>{addQ} Item{addQ>1 ? 's' : ''} added to cart</p>
            </div>
            
        </div>
        </div>
    )
}