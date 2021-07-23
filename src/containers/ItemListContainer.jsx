import React, {useState, useEffect} from 'react';
import { ItemList } from "../components/ItemList"
import { useParams } from "react-router-dom";
import '../css/ItemListContainer.css'
import { Categories } from "../components/Categories";
import {getFirestore} from '../firebase/client'


// FETCH DE PRODUCTOS products.json

export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
/*     const [filterProducts, setFilterProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null); */
    const { id } = useParams();

    
        useEffect(()=>{
          setProducts([])
          const db = getFirestore();
          const itemsCollection = db.collection("productos")
  
          if(id){
              const query = itemsCollection.where("category","==",id)
              query.get()
              .then((resultado)=>{
                  resultado.docs.map((doc)=>{
                      const item = {  id: doc.id,
                                      data: doc.data()    }
                      console.log(item)

                      setProducts(products => [...products, item])
                  })
                  console.log(products)
              })
              .catch((err)=>{
                  console.log(err)
              })
          }else {
              const query = itemsCollection.get()
              query
              .then((resultado)=>{
                  resultado.docs.map((doc)=>{
                      const item = {  id: doc.id,
                                      data: doc.data()    }
                      console.log(item)

                      setProducts(products => [...products, item])
                  })

                  console.log(products)
              })
              .catch((err)=>{
                  console.log(err)
              })
          }
      }, [id]);
  
    return (
      <>
        <Categories/>
          <div className="center">
             {/*  <h1>{greeting} {category ? `: ${category.name}` : ""}</h1> */}
              <ItemList items={products}/>
          </div>
      </>
    )
  }
