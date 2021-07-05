import '../css/NavBar.css'
import logo from '../multimedia/NavBar/logo.svg'
import search from '../multimedia/NavBar/search.svg'
import { CartWidget } from './CartWidget'

export const Navbar = () => {
    return (
        <div className="menu__contenedor">
            <ul className='menu__links'>
                <li><a href="/">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <a href="#"><img src= {logo} alt="logo" className="logo"/></a>
            <div>
                <img src= {search} alt="search" className="menu__imgs"/>
                <CartWidget/>
            </div>
        </div>
    )
}