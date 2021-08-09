import React, {useState, useEffect, useRef} from 'react'
import "./order.css"
import { getFirestore } from '../../firebase/client'

export const Order = (order) => {
    console.log(order)
    const name = order.order.buyer.name
    


    const [copySuccess, setCopySuccess] = useState('');
    const inputRef = useRef(null);

    function copyToClipboard(e) {
        inputRef.current.select();
        document.execCommand('copy');
        //not show the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
      };

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

    return (
        <div className="order_container">
            {orderId ?
            <>
            <p>Thank you for your purchase <span className="order_id">{name}</span></p>
            <div className="order_code">
                <p>This is your order code: <input value={orderId} ref={inputRef} readOnly className="order_id"/></p>
                <div className="order_copy">
                    <img onClick={copyToClipboard} src={process.env.PUBLIC_URL + "/multimedia/copy.svg"} alt="copy" className="copy"/>
                    <p className="copied">{copySuccess}</p>
                </div>
            </div>
            <img src={process.env.PUBLIC_URL + "/multimedia/typurchase.png"} alt="thankYou" className="notFound"/>
            </>
            :
            <><p>Generando su orden</p></>}
            
        </div>
    )
}
