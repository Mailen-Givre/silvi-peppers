import React, {useState, useContext, useEffect} from 'react';
import { ItemCount } from "../ItemCount/ItemCount";
import { NavLink, Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css';
import { useHistory } from "react-router-dom";

export const ItemDetail = ({item})=> {
    const {stock, setStock} = useContext(CartContext)
    const {availableStock, setAvailableStock} = useContext(CartContext)
    const {addProduct} = useContext(CartContext)
    const {counter} = useContext(CartContext)
    const [initial, setInitial] = useState(1);
    const [addItems, setAddItems] = useState(0)

    useEffect(()=> { 
        setStock(item.stock)
    }, [setStock, item])

    let history = useHistory();

    const onCart = (counter) => {
        setAddItems(counter)
        /* addProduct(item, addItems) */
        addProduct(item, counter)
        setAvailableStock(item.stock-addItems)
      }
    
    return <>
        <button onClick={() => history.goBack()} className="goBack"><img src= {process.env.PUBLIC_URL + "/multimedia/flecha-izquierda.svg"} alt="go Back"/>Go back</button>
        <div className="itemDetail">
            <h1>{item.title}</h1>
            <div>
                <img src={item.picture} alt={item.title}></img>
                <div className="details">
                    <p>{item.description}</p>
                    <p id="details_price"><b>Price:</b> ${item.price}</p><br/>
                    <p><b>Available stock:</b> {availableStock}</p>
                      {addItems ?
                        <>
                            <button className="btn-finish"><NavLink className="link-finish" to="/cart">Finish my purchase</NavLink></button>
                            <button className="btn-keep" onClick={() => history.goBack()}>Keep shopping</button>
                        </>
                        : <ItemCount initial={initial} item={item} stock={stock} onCart={onCart}/>
                    }  
                </div>

            </div>
        </div>
    </>
}