import '../css/NavBar.css'
import logo from '../multimedia/NavBar/logo.svg'
import search from '../multimedia/NavBar/search.svg'
import { CartWidget } from './CartWidget'
import deco from '../multimedia/NavBar/deco.svg'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
        <img src= {deco} alt="deco" className="deco"/>
        <div className="menu__contenedor">
            <ul className='menu__links'>
                <li><NavLink to={'/'} activeClassName='NavActive'>Home</NavLink></li>
                <li><NavLink to={'#'}>Shop</NavLink></li>
                <li><NavLink to={'#'}>About me</NavLink></li>
                <li><NavLink to={'#'}>Contact</NavLink></li>
            </ul>
            <a href="#"><img src= {logo} alt="logo" className="logo"/></a>
            <div>
                <img src= {search} alt="search" className="menu__imgs"/>
                <CartWidget/>
            </div>
        </div>
        </>
    )
}