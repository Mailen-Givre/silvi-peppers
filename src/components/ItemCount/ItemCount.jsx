import React, {useState, useEffect, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './ItemCount.css';

export const ItemCount = ({stock, onCart}) => {
    const initial = 1
    const [counter, setCounter] = useState(initial);
    const {setChange} = useContext(CartContext)

    const inputChangedHandler = (event) => {
        setCounter(event.target.value);
    }

    const onAdd = () => {
        counter < stock && setCounter(counter + 1)
    }

    const onSubstract = () => {
        counter >= initial && setCounter(counter - 1)
    };

    useEffect(() => {
        stock === 0 && setCounter(0)
        return () => {setCounter(initial)}
    }, [stock, initial])

    const onAddCart = () => {
        onCart(counter)
    }

    useEffect(()=> {
        setChange(counter)
    }, [counter])

    return (
        <div className= "contadorContenedor">
            <div className="botonesCantidad">
                <button className='controladores' onClick={onSubstract} disabled={counter === 1  || stock === 0}>-</button>
                <input className='counter'type="number" value={counter} placeholder={counter} onChange={(event) => inputChangedHandler(event)}></input>
                <button className='controladores'  onClick={onAdd} disabled={counter === stock || stock === 0}>+</button>
            </div>
            { stock > 0 ?
            <button className='agregarCarrito' disabled={counter === 0} onClick={onAddCart}>Add to cart</button>
            : <button className='agregarCarrito' disabled>Out of stock</button>
            }
        </div>
            )
}