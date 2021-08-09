import React from 'react'
import "./formInput.css"

const FormInput = ({name, type, label, valueHandler, validate, formError, placeholder}) => {

    const errorTarget =  formError && formError.field_id === name
    const errorDisable = formError && formError.field_id !== name

    return (
        <>
        <label className="form_label" htmlFor={label}>{label}*</label>
        <input type={type}
               name={name}
               placeholder={placeholder}
               disabled={errorDisable}
               className={ errorTarget ? "form__input error__input" : "form__input" }
               onChange={valueHandler} 
               onBlur={(e) => validate(e, e.target.value)} />
        { errorTarget ? <span>{formError.message}</span> : null }
        </>
    )
}

export default FormInput
