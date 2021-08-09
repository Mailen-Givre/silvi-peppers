import React, {useState, useEffect, useRef} from 'react'
import "./order.css"

export const Order = () => {

    const [copySuccess, setCopySuccess] = useState('');
    const inputRef = useRef(null);

    function copyToClipboard(e) {
        inputRef.current.select();
        document.execCommand('copy');
        //not show the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
      };

    return (
        <div className="order_container">
            <p>Thank you for your purchase Mailen Givre</p>
            <div className="order_code">
                <p>This is your order code: <input value="dgfhgfntyentyng45325" ref={inputRef} readOnly className="order_id"/></p>
                <div className="order_copy">
                    <img onClick={copyToClipboard} src={process.env.PUBLIC_URL + "/multimedia/copy.svg"} alt="copy" className="copy"/>
                    <p className="copied">{copySuccess}</p>
                </div>
            </div>
            <img src={process.env.PUBLIC_URL + "/multimedia/typurchase.png"} alt="thankYou" className="notFound"/>
        </div>
    )
}
