import React, {useState} from 'react';
import { ItemCount } from "../components/ItemCount";
import { NavLink } from 'react-router-dom';

export const ItemDetail = ({picture,title,description,price,stock,initial})=> {
    const [stockB, setStockB] = useState(stock);
    const [inicial, setInicial] = useState(initial);
    const [cantItem, setCantItem] = useState()

    const onCart = ()=>{
        if(stock>0) { 
            setCantItem(initial)
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

    
    return <>
        <img src={picture} alt="Imagen de producto" height="200px"></img>
        <p>{title}</p>
        <p>{description}</p>
        <p>precio: ${price}</p>
        <p>stock: {stock}</p>
        {cantItem ? 
            <button><NavLink to="/cart">Finish my purchase</NavLink></button>
            : <ItemCount onCart={onCart} onAdd={onAdd} onSubstract={onSubstract} initial={inicial}/>
        }
    </>
}