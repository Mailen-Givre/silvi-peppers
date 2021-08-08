import React, {useState, useEffect} from 'react'
import "./categories.css"
import {NavLink} from 'react-router-dom'
import { getCategories } from "../../firebase/client"

export const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getCategories() 
        .then((querySnapshot) => {
            querySnapshot.size === 0 && console.log("No hay resultados")
            let result = querySnapshot.docs.map(doc => {
                return ({
                    catId: doc.id,
                    ...doc.data()
                 })
             })
             setCategories(result)
         })
     }, [])

    return (
        <div className='categories'>
            <ul>
                <li><NavLink to={"/category/all"} activeClassName='categoryActive'>All</NavLink></li>
                { categories.map((category) =>
                    <li key={category.catId}>
                        <NavLink to={`/category/${category.name}`} activeClassName='categoryActive'>{category.name.replace(/_/g, ' ')}</NavLink>
                    </li> )}
            </ul>
        </div>
    )
}