import React, {useState} from 'react';
import '../css/ItemCount.css'

//INCREMENTA O DECREMENTA LA CANT DE UN PRODUCTO

export const ItemCount = ({initial,stock}) => {
    const [stockB, setStockB] = useState(stock);
    const [inicial, setInicial] = useState(initial);

    const onAdd = () => {
        console.log('hola')
        if (stockB>1){
            setInicial (inicial+1);
            setStockB (stockB-1);
        }
    }
    const onSubstract = () => {
        console.log('hola2')
        if (inicial>1){
            setInicial (inicial-1);
            setStockB (stockB+1);
        }
    }

    return (
        <div className= "contadorContenedor">
            <div className="botonesCantidad">
                <button className='controladores' onClick= {onSubstract} >-</button>
                <p>{inicial}</p>
                <button className='controladores' onClick= {onAdd}>+</button>
            </div>
                <button id='agregarCarrito'>Add to cart</button>
        </div>
    )
}