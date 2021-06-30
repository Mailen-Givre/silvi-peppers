import React, {useState, useEffect} from 'react';
import { ItemList } from "../components/ItemList"

// FETCH DE PRODUCTOS products.json

export const ItemListContainer = ({greeting}) => {
    const [items,setItems]=useState([]);
    useEffect(()=>{
        let getProductos = fetch("../products.json")
        getProductos
        .then((resultado)=>{
            return resultado.json()
        })
        .then((datos)=>{
            setTimeout(()=>{
                setItems(datos)
            },2000)
        })       
    }, [])

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList items={items}/>
        </>
    )
}
