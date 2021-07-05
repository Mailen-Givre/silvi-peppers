import React, {useState, useEffect} from 'react';
import { ItemDetail } from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import loading from '../multimedia/loading-cat.gif'

export const ItemDetailContainer = ({greeting}) => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      const getItems = async () => {
        let p;
        if (products.length === 0) {
          const response = await fetch("../products.json");
          let aux = await response.json();
          p = aux;
          setProducts(aux);
        }
        p = products.find((p) => p.id === parseInt(id));
          setProduct(p);
      };
     getItems();
    }, [id, products]);

    return (
        <>
        <h2>{greeting}</h2>
        {product ? <ItemDetail title={product.title} price={product.price} description={product.description} picture={product.picture} stock={product.stock}/>
        : <img src={loading} alt="Loading"></img>}
{/*         {product.map(item=>{
            return <ItemDetail key={item.id} title={item.title} price={item.price} description={item.description} picture={item.picture} stock={item.stock}/>
        })} */}
        </>)
}