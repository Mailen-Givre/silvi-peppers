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
    const crearProducto = (objetoItem, quantity, callback)=> {
        const itemAgregado = {producto: objetoItem, cantidad: quantity}        
        callback(itemAgregado)
    }

    //chuequea si el producto ya fue agregado, si no, lo agrega
    const isInCart = (producto)=> {
        const existe = cart.find(element => element.producto.id === producto.producto.id)
        /* console.log(existe) */
        if (!existe) {
            setCart(cart => [...cart, producto])
            setQuantity(quantityB = quantityB + producto.cantidad)
        }
            else{alert("The product has already been added.")}
    }
    
    //remover un item del carrito usando su id
    const removeItem = (itemId)=> {
        quitarItem(itemId, borrarItem)
    }

    const quitarItem = (itemId, callback)=> {
        const index = cart.indexOf(cart.find(element => element.producto.id === itemId))
        callback(index)
    }

    const borrarItem = (index)=> {
        setCart(cart.splice(index, 1))
    }

    //remover todos los items
    const clear = ()=> {
        setCart([])
    }

    //cantidad de productos
    
/*     useEffect(() => {

        setQuantity(cart.length)
    }, [cart]) */

    //FIREBASE

    useEffect(()=>{
        // const DB = getFirestore(); // Conexion a la base de datos
        // const COLLECTION = DB.collection("productos") // tomamos la coleccion
        // COLLECTION.get().then(querySnapshot =>{
        //     console.log(querySnapshot.size)
        //     console.log(querySnapshot.docs.map(elenebt => element.data()))
        // })
  
      // async function getData(){
      //   const DB = getFirestore()
      //   const COLLECTION = DB.collection("productos")
      //   const RESPONSE = await COLLECTION.get()
      //     console.log(RESPONSE.docs.map(element => element.data()))
      // }
      // setListProducts(RESPONSE.data());
      // setListProducts(RESPONSE.doc.map(element => {
      //   return {id: element.id, ...element.data}
      // }))
      // getData();
  
      async function getData(){
        const DB = getFirestore()
        const COLLECTION = DB.collection("productos")
        const RESPONSE = await COLLECTION.doc('meNn8dUdekSoMM5wMFGJ').get() // traer un solo objeto
        //const RESPONSE = await COLLECTION.where('stock', '>', 0).offset(20).limit(20).get() //ejemplo de filtro. 
        // con el limit te limita la cant de productos a buscar y el offset es desde que producto empieza (para hacer los prox 20)
          console.log(RESPONSE.data())
      }
      getData();
    },[]);
  


    return (
        <Provider value={{addItem, removeItem, clear, cart, quantityB}}>

            {children}

        </Provider>
    )
} 