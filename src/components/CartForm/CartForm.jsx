import React, { useState } from 'react'
import "./cartForm.css"
import FormInput from "../FormInput/FormInput"
import {Link} from 'react-router-dom';
 

export const CartForm = ({getInfo, orderId}) => {

    const [load, setLoad] = useState(false)
    const [finish, setFinish] = useState(false)
    const initialState = { fullname: "", telephone: "", email: ""}

    const [formData, setFormData] = useState(initialState)
    const [formError, setFormError] = useState(null)

    //console.log(formError);
    const validation = {
        fullname: {
            regex: /^[a-zA-z]+ (.+\s+.*)|(.*\s+.+)[a-zA-z]+$/i,
            error: "Please enter your full name"
        },
        telephone: {
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
    const valueHandler = (e) => {
        let newData = {
            ...formData,
        };
        newData[e.target.name] = e.target.value
        setFormData(newData)
        formError && validate(e, e.target.value) 
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setLoad(true)
        setTimeout(() => {
            !formError && getInfo(formData)
            setFinish(true)
        }, 1000);
    }

    const inputs = [
        { name: "fullname", type: "text", label: "Full Name"},
        { name: "telephone", type: "tel", label: "Phone", placeholder:"+56 2 12345678"},
        { name: "email", type: "email", label: "Address"}
    ]
    
    return (
        <div className="form_container">
            <h2>Billing Address</h2>
            <form onSubmit={submitHandler} className="form__form">
                { inputs.map((input) => 
                    <FormInput key={input.name} name={input.name} type={input.type} label={input.label} placeholder={input.placeholder}
                        valueHandler={valueHandler} validate={validate} formError={formError} /> )
                }
                { ! finish ?
                    <button className={!load ? "form__submit" : "form__submit loading-state" }
                       type="submit" disabled={orderId}>
                           { !finish && !load ? "Generate purchase order" 
                             : <span className="span__loading">Confirming <img className="loading" src="/images/greenloading.gif" alt="loading"/></span> }
                    </button>
                    : <Link to="/order"> <button className="form__submit">Generated order</button> </Link>}
            </form>
        </div>
    )
}
