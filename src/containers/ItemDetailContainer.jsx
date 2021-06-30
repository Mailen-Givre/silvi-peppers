import React, {useState, useEffect} from 'react';
import { ItemDetail } from "../components/ItemDetail";

export const ItemDetailContainer = ({items}) => {
    const [item,setItem]=useState([]);
    const buscarItem = items.find((elemento)=>{ return elemento.id === 1})
    console.log(buscarItem)

    useEffect(()=>{
        new Promise ((resolver,rechazar)=>{
            setTimeout(()=>{
                resolver(buscarItem)
            },2000)
        })
        .then((resultado)=>{
            setItem(resultado)
        })
    },[buscarItem])

    return (
        <>
    {items.map(item=>{
        return <ItemDetail key={item.id} title={item.title} price={item.price} description={item.description} picture={item.picture} stock={item.stock}/>
    })}
    </>)
}