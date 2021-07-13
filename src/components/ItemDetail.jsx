import React, {useState, useContext} from 'react';
import { ItemCount } from "../components/ItemCount";
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import '../css/ItemDetail.css';
import goBack from '../multimedia/flecha-izquierda.svg'

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

    

    return <>
        <Link to="/"><img src= {goBack} alt="go Back" className="goBack"/></Link>
        <div className="itemDetail">
            <h1>{title}</h1>
            <div className="flex">
                <img src={picture} alt="Imagen de producto" height="400px"></img>
                <div className="details">
                    <p>{description}</p>
                    <b>Price: ${price}</b><br/>
                    <b>Available stock: {stock}</b>
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