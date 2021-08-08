import React, {useState, useEffect, useContext} from 'react';
import './ItemCount.css';
import { CartContext } from '../../context/CartContext';

export const ItemCount = ({initial, stock, onAdd, item, addItems,setAddItems,setStock}) => {
    const [counter, setCounter] = useState(initial);
    const {addProduct} = useContext(CartContext)

    const Add = () => {
        counter < stock && setCounter(counter + 1)
    }

    const onSubstract = () => {
        counter > initial && setCounter(counter - 1)
    };

    const onAddActive = () => {
        onAdd(counter)
    }
    
    const confirm = () => {
        setStock(stock - addItems);
        addProduct(item, addItems)
        console.log("hola")
        console.log(item)
        console.log(stock)
    }

    useEffect(() => {
        stock === 0 && setCounter(0)
        return () => {setCounter(initial)}
    }, [stock, initial])
    
    return (
        <div className= "contadorContenedor">
            <div className="botonesCantidad">
                <button className='controladores' onClick= {onSubstract} disabled={counter === 1  || stock === 0}>-</button>
                <p className='counter'>{counter}</p>
                <button className='controladores' onClick= {Add} disabled={counter === stock || stock === 0}>+</button>
            </div>
            { stock > 0 ?
            <button className='agregarCarrito' disabled={counter === 0} onClick={onAddActive, confirm}>Add to cart</button>
            : <button className='agregarCarrito' disabled>Out of stock</button>
            }
        </div>
            )
}