import React, { createContext, useState, useEffect } from "react";
import { getFirestore } from '../firebase/client';

export const ShopContext = createContext()

const {Provider} = ShopContext

export const CustomProvider = ({children}) => {

    const [cart, setCart] = useState([/* producto1, producto2, etc */])
    let [quantityB, setQuantity] = useState(0)
    
    //recibe info de ItemDetail
    const addItem = (objetoItem, quantity)=> {
        crearProducto(objetoItem, quantity, isInCart)        
    }

    //crea el producto para pasarlo a la lógica
    const crearProducto = (objetoItem, quantity, callback, precio)=> {
        const itemAgregado = {
            producto: objetoItem, 
            cantidad: quantity,
            subTotal: objetoItem.price * quantity}       
        callback(itemAgregado)
    }

    //chuequea si el producto ya fue agregado, si no, lo agrega
    const isInCart = (producto)=> {
        const existe = cart.find(element => element.producto.id === producto.producto.id)
        if (!existe) {
            setCart(cart => [...cart, producto])
            setQuantity(quantityB = quantityB + producto.cantidad)
        }
            else{alert("The product has already been added.")}
    }
    
    //remover un item del carrito usando su id
    const removeItem = (itemId, cantidad)=> {
        quitarItem(itemId, cantidad, borrarItem)
    }

    const quitarItem = (itemId, cantidad, callback)=> {
        const index = cart.indexOf(cart.find(element => element.producto.id === itemId))
        callback(index, cantidad)
    }

    const borrarItem = (index, cantidad)=> {
        setCart(cart.splice(index, 1))
        setQuantity(quantityB = quantityB - cantidad)
    }

    //remover todos los items
    const clear = ()=> {
        setCart([])
    }

    const getTotal = () => {
        return cart.map(element => element.subTotal).reduce((a,b) => a + b, 0)

      }


    return (
        <Provider value={{addItem, removeItem, clear, cart, quantityB, getTotal}}>

            {children}

        </Provider>
    )
} 