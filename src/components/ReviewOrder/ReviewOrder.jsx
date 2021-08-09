import React from 'react'
import "./reviewOrder.css"

export const ReviewOrder = () => {
    return (
        <div className="reviewOrder_container">
            <h2>Review of order</h2>
            <div className="reviewOrder_item">
                <div className="reviewOrder_item-info">
                    <img src="https://firebasestorage.googleapis.com/v0/b/silvipeppers-39d4f.appspot.com/o/beautiful_boys.jpg?alt=media&token=b31b2ed9-7a5c-4848-9f6f-7131d9910c2e"></img>
                    <div className="reviewOrder_p">
                        <h4>Beautiful Boys</h4>
                        <p>x 4</p>
                    </div>
                </div>
                <h4>$200</h4>
            </div>
            <hr />
            <div className="reviewOrder_item">
                <div className="reviewOrder_item-info">
                    <img src="https://firebasestorage.googleapis.com/v0/b/silvipeppers-39d4f.appspot.com/o/beautiful_boys.jpg?alt=media&token=b31b2ed9-7a5c-4848-9f6f-7131d9910c2e"></img>
                    <div className="reviewOrder_p">
                        <h4>Beautiful Boys</h4>
                        <p>x 4</p>
                    </div>
                </div>
                <h4>$200</h4>
            </div>
            <hr />
            <div className="reviewOrder_total">
                <p>Total:</p>
                <h3>$400</h3>
            </div>
        </div>
    )
}
