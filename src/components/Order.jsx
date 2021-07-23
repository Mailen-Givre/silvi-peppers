import React, {useState, useEffect} from 'react'
import { getFirestore } from '../firebase/client'

export const Order = (order) => {
    const [orderId, setOrderId] = useState()
    
    //Preparar nueva orden y crear doc en firestore
    useEffect(()=>{
        const db = getFirestore();
        const orders = db.collection("orders")
        if (!orderId) {
            orders.add(order)
            .then(({id})=>{
                setOrderId(id)
                console.log(id)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        
    },[orderId, order])

    console.log("Render Orden")

    return (<>{orderId ?
                <>
                    <p>Orden de compra número: {orderId}</p>
                    <p>Gracias por su compra!</p>
                </>
                :
                <><p>Generando su orden</p></>
    }</>)
}
