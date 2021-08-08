import React, { createContext, useState} from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const [stock, setStock] = useState() //Necesito stock para actualizar al instante el cartcounter. Se asigna valor inicial en ItemDetail

    const addProduct = (item, addItems) => { 
        const purchase = {
               item: {
                    productId: item.id,
                    category: item.category,
                    title: item.title,
                    price: item.price,
                    description: item.description,
                    picture: item.picture,
                    stock: item.stock
                },
                quantity: addItems 
            }
            mergeDuplicate(purchase, purchase.item.productId, addItems)
            cartCounter()
            console.log("Item completo", item)
            console.log("Item reducido", purchase)
    }

    const searchIdInCart = (itemId) => {
        return cart.find(ticket => ticket.item.productId === itemId)    
    }

    const addMoreToCart = (itemId, addItems) => {  //cartModal
        searchIdInCart(itemId).quantity += addItems
    }

    const mergeDuplicate = (purchase, itemId, addItems) => { //cartModal
        cart.length && searchIdInCart(itemId) ? addMoreToCart(itemId, addItems) : setCart([...cart, purchase]) //crea un nuevo array para que note el cambio y reenderize (eso con push no pasa)
    }

    const changeQuantity = (itemId, counter) => {  //CartView
        searchIdInCart(itemId).quantity = counter
        setCart([...cart])
    }

    const removeFromCart = (itemId) => { //CartView
        const filtered = cart.filter(purchase =>  //si se pone entre llaves, necesita return
            purchase.item.productId !== itemId
        )
        setCart(filtered)
    }

    const cartCounter = () => { //CartWidget
        return cart.reduce((acc, purchase) => {
            return acc + purchase.quantity
        }, 0)
    }

    const total = () => { //CartView
        return cart.reduce((acc, purchase) => {
            return acc + purchase.item.price * purchase.quantity
        }, 0) //valor inicial del array
    }

    const clearCart = () => {
        setCart([])
    }


    return (
        <CartContext.Provider value={{cart, setCart, searchIdInCart, stock, setStock, addMoreToCart, changeQuantity,
          removeFromCart, addProduct, mergeDuplicate, clearCart, total, cartCounter, 
          }}>
            {children}
        </CartContext.Provider>
    )
}