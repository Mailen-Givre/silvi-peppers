import React, { useState, useContext } from 'react'
import "./cartForm.css"
import FormInput from "../FormInput/FormInput"
import { Order } from '../Order/Order';
import { CartContext } from '../../context/CartContext';
 

export const CartForm = ({cart, total}) => {
    
    const initialState = { name: "", phone: "", email: ""}

    const [formData, setFormData] = useState(initialState)
    const [formError, setFormError] = useState(null)
    
    const [order, setOrder] = useState()


    const valueHandler = (e) => {
        let newData = {
            ...formData,
        };
        newData[e.target.name] = e.target.value
        setFormData(newData)
        formError && validate(e, e.target.value) //valida al momento de escribir

    }

    const newUsuario = (e)=>{
        e.preventDefault()
        const nuevoUsuario = formData
        console.log(nuevoUsuario)
        crearOrden(nuevoUsuario, setOrder)
    }
    const crearOrden = (usuario, callback)=>{
        const newOrden = {  buyer: usuario,
                            items: cart,
                            total: total()    }
        callback(newOrden)
    }
    console.log(order)


    const validation = {
        name: {
            regex: /^[a-zA-z]+ (.+\s+.*)|(.*\s+.+)[a-zA-z]+$/i,
            error: "Please enter your full name"
        },
        phone: {
            regex: /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/,
            error: "Please enter a valid number. Ex +54 11 87654321"
        },
        email: {
            regex: /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
            error: "Please enter a valid email address"
        }
    };
    const validate = (e, inputValue) => {
        const inputTarget = validation[e.target.name]; //property access with bracket notation para mantener el valor dinámico
        !inputTarget.regex.test(inputValue) ? setFormError({
            field_id: e.target.name,
            message: inputTarget.error
        }) : setFormError(null)
    }
   
  
    const inputs = [
        { name: "name", type: "text", label: "Full Name"},
        { name: "phone", type: "tel", label: "Phone", placeholder:"+56 2 12345678"},
        { name: "email", type: "email", label: "Email Address"}
    ]

    const {clearCart} = useContext(CartContext)

    return (
        <>{!order ?
        (<div className="form_container">
            <h2>Billing Address</h2>
            <form className="form__form" onSubmit={(e)=>newUsuario(e)}>
                { inputs.map((input) => 
                    <FormInput key={input.name} name={input.name} type={input.type} label={input.label} placeholder={input.placeholder}
                    valueHandler={valueHandler} validate={validate} formError={formError} /> )
                }

                    <button onClick={clearCart} type="submit" className="form__submit">Generate order</button>

            </form>
        </div>)
        : <Order order={order}/>}</>
    )
}
