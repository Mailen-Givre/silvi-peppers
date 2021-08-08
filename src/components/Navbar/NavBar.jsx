import './navBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import {NavLink, Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { Search } from '../Search/Search';
import { LogIn } from '../../svg/LogIn'

export const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <>
            <div className="deco"></div>
            <div className="menu__contenedor">
                <ul className='menu__links'>
                    <li><NavLink to={'/'} exact={true} activeClassName='NavActive'>Home</NavLink></li>
                    <li><NavLink to={'/category/all'} isActive={() => ['/category/all','/category/embroidery','/category/drawings','/category/paper_art'].includes(pathname)} activeClassName='NavActive'>Shop</NavLink></li>
                    <li><NavLink to={'/about'} activeClassName='NavActive'>About me</NavLink></li>
                    <li><NavLink to={'/contact'} activeClassName='NavActive'>Contact</NavLink></li>
                </ul>
                <Link to={'/'}><img src= {process.env.PUBLIC_URL + "/multimedia/navBar/logo.svg"} alt="logo" className="logo"/></Link>
                <div className="menu_derecha">
                    <Search/>
                    <div className="menu_icons">
                    {<Link to={'#'}><LogIn/></Link>  }         
                    <CartWidget/>
                    </div>
                </div>
            </div>
        </>
    )
}