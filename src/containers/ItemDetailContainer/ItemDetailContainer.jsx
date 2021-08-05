import React, {useState, useEffect} from 'react';
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getFirestore} from '../../firebase/client'
import "./itemDetailContainer.css"

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(()=>{
      setProduct()
      const db = getFirestore();
      const itemsCollection = db.collection("productos")

      if(id){
          const itemId = id
          const query = itemsCollection.get()
          query
          .then((resultados)=>{
              const arrayDocs = resultados.docs
              const resultado = (arrayDocs.filter(doc=>doc.id===id)[0]).data()
              const res = {   id: itemId,
                              category: resultado.category,
                              title: resultado.title,
                              price: resultado.price,
                              description: resultado.description,
                              picture: resultado.picture,
                              stock: resultado.stock    }
              setProduct(res)
          })
          .catch((err)=>{
              console.log(err)
          })
      }

  }, [id])

    return (
        <>
        {product ? <ItemDetail title={product.title} price={product.price} description={product.description} picture={product.picture} stock={product.stock} initial={1} product={product}/>
        : <img src={process.env.PUBLIC_URL + "/multimedia/loading-cat.gif"} alt="Loading" className="loading" ></img>}
        </>)
}