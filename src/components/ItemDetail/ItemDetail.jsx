import React, {useState, useContext} from 'react';
import { ItemCount } from "../ItemCount/ItemCount";
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import './ItemDetail.css';
import { useHistory } from "react-router-dom";

export const ItemDetail = ({picture,title,description,price,stock,initial,product})=> {
    const {addItem} = useContext(ShopContext)

    const [stockB, setStockB] = useState(stock);
    const [inicial, setInicial] = useState(initial);
    const [cantItem, setCantItem] = useState()

    const onCart = ()=>{
        //efectuar cambios en el stock
        handleStock()
        //mandar la info del item y su cant al contexto
        addItem(product, inicial)
    }

    const handleStock = ()=> {
        if(stockB>0) {
            setStockB(stockB-inicial)
            setCantItem(inicial)
        }
    }    

    const onAdd = () => {
        if (stockB>initial){
            setInicial (inicial+1);
            setStockB(stockB-initial)
        }
    }
    const onSubstract = () => {
        if (inicial>initial){
            setInicial (inicial-1);
            setStockB (stockB+1);
        }
    }

    let history = useHistory();
    
    return <>
        <button onClick={() => history.goBack()} className="goBack"><img src= {process.env.PUBLIC_URL + "/multimedia/flecha-izquierda.svg"} alt="go Back"/>Go back</button>
        <div className="itemDetail">
            <h1>{title}</h1>
            <div>
                <img src={picture} alt="Imagen de producto"></img>
                <div className="details">
                    <p>{description}</p>
                    <p id="details_price"><b>Price:</b> ${price}</p><br/>
                    <p><b>Available stock:</b> {stock}</p>
                    {cantItem ?
                        <>
                            <button><NavLink to="/cart">Finish my purchase</NavLink></button>
                            <button><NavLink to="/">Keep shoping</NavLink></button>
                        </>
                        : <ItemCount onCart={onCart} onAdd={onAdd} onSubstract={onSubstract} initial={inicial} product={product}/>
                    }
                </div>

            </div>
        </div>
    </>
}