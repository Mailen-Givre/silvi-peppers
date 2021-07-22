import React, {useState, useEffect} from 'react';
import { ItemList } from "../components/ItemList"
import { useParams } from "react-router-dom";
import '../css/ItemListContainer.css'
import { Categories } from "../components/Categories";
import {getFirestore} from '../firebase/client'


// FETCH DE PRODUCTOS products.json

export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);
    const { id } = useParams();

    
        useEffect(()=>{
          setProducts([])
          const db = getFirestore();
          const itemsCollection = db.collection("productos")
  
          if(id){
              const query = itemsCollection.where("category","==",id)
              query.get()
              .then((resultado)=>{
                  console.log(resultado.docs)
                  resultado.docs.forEach((doc)=>{
                      const item = {  id: doc.id,
                                      data: doc.data()    }
                      setProducts(products => [...products, item])
                      console.log(products)
                  })
              })
              .catch((err)=>{
                  console.log(err)
              })
          }else {
              const query = itemsCollection.get()
              query
              .then((resultado)=>{
                  resultado.docs.forEach((doc)=>{
                      const item = {  id: doc.id,
                                      data: doc.data()    }
                      setProducts(products => [...products, item])
                  })
              })
              .catch((err)=>{
                  console.log(err)
              })
          }
      }, [id]);
  
/*    useEffect(()=>{
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
        }, [id, products, categories]); */
        



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
