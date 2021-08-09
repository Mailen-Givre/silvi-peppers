import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import '../ItemListContainer/ItemListContainer.css'
import { Categories } from "../../components/Categories/Categories";
import {getFirestore} from '../../firebase/client'
import { SearchResults } from '../../components/SearchResults';

export const SearchContainer = () => {
    const [products, setProducts] = useState([]);
    const [notFound, setNotFound] = useState(false)
    const { id } = useParams();

    
        useEffect(()=>{
            const db = getFirestore();
            const itemsCollection = db.collection("productos")
            let query

            if(id) {
                query = itemsCollection.where("category","==",id)
            } else {
                query = itemsCollection
            }
            query.get()
            .then((resultado)=>{
                resultado.size === 0 && console.log("No hay resultados")
                let result = resultado.docs.map(doc => {
                    return({
                    id: doc.id,
                    ...doc.data()
                    })
                })
                result.length ? setProducts(result) : setNotFound(true)
            })
            .catch((err)=>{
                console.log(err)
            })
            return () => setProducts([]) + setNotFound(false)
        }, [id]);
        
    return (
      <>
        <Categories/>
          <div className="center">
              {!products.length && !notFound ? <img src={process.env.PUBLIC_URL + "/multimedia/loading-cat.gif"} alt="Loading" className= "loading" ></img> 
              : <SearchResults items={products} /> }
          </div>
      </>
    )
  }