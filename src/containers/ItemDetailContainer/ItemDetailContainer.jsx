import React, {useState, useEffect} from 'react';
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getFirestore} from '../../firebase/client'
import "./itemDetailContainer.css"

export const ItemDetailContainer = () => {
    let { id } = useParams();
    const [product, setProduct] = useState("");
    const [notFound, setNotFound] = useState(false)

    const getItem = (id) => {
        const db = getFirestore();
        db.collection('productos').doc(id).get().then((snapshot) => {
           !snapshot.exists ? setNotFound(true) : setProduct({id: snapshot.id, ...snapshot.data()})
        });
      };
      
      useEffect(() => {
        getItem(id);
      }, [id]);

    return (
        <>
        {product === '' 
        ? (!notFound && <img src={process.env.PUBLIC_URL + "/multimedia/loading-cat.gif"} alt="Loading" className="loading" />)
        : <ItemDetail item={product}/> 
        }
        {notFound && <img src={process.env.PUBLIC_URL + "/multimedia/404.png"} alt="404" className="notFound"/>}
        </>
        )
};