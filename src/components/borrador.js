import React, {useState, useEffect} from 'react';
import { ItemList } from "../components/ItemList"
import { Link, useParams } from "react-router-dom";


// FETCH DE PRODUCTOS products.json

export const Borrador = ({greeting}) => {
    const [items,setItems]=useState([]);
/*     useEffect(()=>{
        let getProducts = fetch('../products.json')
        new Promise ((resolver, rechazar) => {
            setTimeout(()=>{
                    return resolver.json() 
            },2000);
        })
        getProducts
        .then((resultado)=>{
            setItems(resultado)
        })
    },[]) */

    useEffect(()=>{
        let getProductos = fetch("../products.json")
        getProductos
        .then((resultado)=>{
            return resultado.json()
        })
        .then((resultado)=>{
            setTimeout(()=>{
                    setItems(resultado)
            },2000)
        })       
    }, [])


/*     const {nombreUsuario} = useParams()
    const productos = [{id:1, name:'shoes'},{id:2, name:'shirt'}] */

    return (
        <>
        
        {/* {productos.map}(product =>{
            return <div>
                <h2>{product.name}</h2>
                <h2>{product.id}</h2>
                <button><Link to={`/prueba/${product.id}`}>Ver producto</Link></button>
            </div>
        }) */}
            <h1>{greeting}{/* {nombreUsuario} */}</h1>
            <ItemList items={items}/>
            
            {/* <button><Link to={'/'}>Ir a prueba</Link></button> */}
        </>
    )
}