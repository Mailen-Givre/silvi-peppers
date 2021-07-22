import React, {useState, useEffect} from 'react';
import { ItemDetail } from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import loading from '../multimedia/loading-cat.gif'
import {getFirestore} from '../firebase/client'

export const ItemDetailContainer = ({greeting}) => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
  
    useEffect(()=>{
      const db = getFirestore();
      setProducts()
      const itemsCollection = db.collection("productos")

      if(id){
          const itemId = id
          /* console.log(itemId) */
          const query = itemsCollection.get()
          query
          .then((resultados)=>{
              /* console.log(resultados.docs) */
              const arrayDocs = resultados.docs
              const resultado = (arrayDocs.filter(doc=>doc.id===id)[0]).data()
              /* console.log(resultado) */
              const res = {   id: itemId,
                              category: resultado.category,
                              title: resultado.title,
                              price: resultado.price,
                              description: resultado.description,
                              picture: resultado.picture    }
              setProducts(res)
          })
          .catch((err)=>{
              console.log(err)
          })
      }

  }, [id])
  

/*     useEffect(() => {
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
    }, [id, products]); */

    return (
        <>
        {product ? <ItemDetail title={product.title} price={product.price} description={product.description} picture={product.picture} stock={product.stock} initial={1} product={product}/>
        : <img src={loading} alt="Loading" className="loading" ></img>}
        </>)
}