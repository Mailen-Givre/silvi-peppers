import './addCart.css'

export const AddCart = ()=> {

    return (
        <div className="addCart">
        <img src= {process.env.PUBLIC_URL + "/multimedia/cart.svg"} alt="cart" className='cart'/>
        <p>Add to cart</p>
    </div>
    )
}