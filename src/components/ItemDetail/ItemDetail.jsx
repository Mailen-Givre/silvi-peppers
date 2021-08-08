import React, {useState, useContext, useEffect} from 'react';
import { ItemCount } from "../ItemCount/ItemCount";
import { NavLink, Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css';
import { useHistory } from "react-router-dom";

export const ItemDetail = ({item})=> {
    const {stock, setStock} = useContext(CartContext)
    
    const [addItems, setAddItems] = useState(0)

    const [cantItem, setCantItem] = useState()
    const [initial, setInitial] = useState(1);
    /* const {addProduct} = useContext(CartContext) */

    useEffect(()=> { 
        setStock(item.stock)
        console.log(stock + "1")
    }, [setStock, item])

    const onAdd = (counter) => {
        console.log(counter)
        setAddItems(counter)
        handleStock()
/*         addProduct(item, addItems) */
        console.log(addItems)
    }

    const handleStock = ()=> {
        if(stock>0) {
/*             setStock(stock - addItems); */
            setCantItem(initial)
        }
    }    
    
    let history = useHistory();
    
    
    return <>
        <button onClick={() => history.goBack()} className="goBack"><img src= {process.env.PUBLIC_URL + "/multimedia/flecha-izquierda.svg"} alt="go Back"/>Go back</button>
        <div className="itemDetail">
            <h1>{item.title}</h1>
            <div>
                <img src={item.picture} alt={item.title}></img>
                <div className="details">
                    <p>{item.description}</p>
                    <p id="details_price"><b>Price:</b> ${item.price}</p><br/>
                    <p><b>Available stock:</b> {item.stock}</p>
                    {cantItem ?
                        <>
                            <button><NavLink to="/cart">Finish my purchase</NavLink></button>
                            <button onClick={() => history.goBack()}>Keep shoping</button>
                        </>
                        : <ItemCount initial={initial} onAdd={onAdd} item={item} addItems={addItems} setAddItems={setAddItems}
                        stock={stock} setStock={setStock}/>
                    }
                </div>

            </div>
        </div>
    </>
}