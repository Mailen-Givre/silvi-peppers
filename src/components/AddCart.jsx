import cart from '../multimedia/cart.svg' 
import '../css/addCart.css'

export const AddCart = ()=> {

    return (
        <div className="addCart">
        <img src= {cart} alt="cart" className='cart'/>
        <p>Add to cart</p>
    </div>
    )
}