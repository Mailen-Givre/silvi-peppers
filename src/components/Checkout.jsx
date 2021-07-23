import React, {useContext, useState} from 'react'
import {Order} from "./Order"
import { ShopContext } from '../context/ShopContext'

export const Checkout = () => {
    const [order, setOrder] = useState()
    const {cart, getTotal} = useContext(ShopContext)
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()

    const newUsuario = (e)=>{
        e.preventDefault()
        const nuevoUsuario = {  nombre: name,
                                telefono: phone,
                                correo: email   }
        crearOrden(nuevoUsuario, setOrder)
    }
    const crearOrden = (usuario, callback)=>{
        const newOrden = {  buyer: usuario,
                            items: cart,
                            total: getTotal()    }
        callback(newOrden)
    }
    console.log(order)

    return (
        <>{!order ?
            (<div >
                <p>Complete :</p>
                <form onSubmit={(e)=>newUsuario(e)}>
                    <div >
                        <label htmlFor="nombre">Name: </label>
                        <input onChange={(e)=>{setName(e.target.value)}} id="nombre" type="text" name="nombre" placeholder="José Perez" required></input>
                    </div>
                    <div >
                        <label htmlFor="celular">Phone: </label>
                        <input onChange={(e)=>{setPhone(e.target.value)}} id="celular" type="tel" name="celular" placeholder="1133333333" required></input>
                    </div>
                    <div >
                        <label htmlFor="email">Email: </label>
                        <input onChange={(e)=>{setEmail(e.target.value)}} id="email" type="email" name="email" placeholder="jperez@email.com" required></input>
                    </div>
                    <button type="submit">Finish</button>
                </form>
                
            </div>)
            : <Order order={order}/>        
        }</>
    )
}
