import React, {useState, useEffect} from 'react';
import { ItemList } from "../components/ItemList"
import { useParams } from "react-router-dom";

// FETCH DE PRODUCTOS products.json

export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);
    const { id } = useParams();

    useEffect(()=>{
        setFilterProducts([]);
        setCategory(null);

        const getItems = async () => {
            let p, cat;
            if (products.length !== 0)
              p = id ? products.filter((p) => p.category === parseInt(id)) : products;
            else {
              const response = await fetch("../products.json");
              let aux = await response.json();
              p = aux;
              setProducts(aux);
            }
            if (id) {
              if (categories.length === 0) {
                const response = await fetch("../categories.json");
                let aux = await response.json();
                setCategories(aux);
              }
              cat = categories.find((c) => c.id === parseInt(id));
            }
            setTimeout(() => {
              setFilterProducts(p);
              setCategory(cat);
            }, 1000);
          };
          getItems();
        }, [id, products, categories]);
        
/*         let getProductos = fetch("../products.json")
        getProductos
        .then((resultado)=>{
            return resultado.json()
        })
        .then((datos)=>{
            setTimeout(()=>{
                setItems(datos)
            },2000)
        })       
    }, []) */

    return (
        <>
            <h1>{greeting} {category ? `: ${category.name}` : ""}</h1>
            <ItemList items={filterProducts}/>
        </>
    )
}
