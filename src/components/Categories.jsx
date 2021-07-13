import '../css/Categories.css'
import {NavLink} from 'react-router-dom'

export const Categories = () => {
    return (
        <div className='categories'>
            <ul>
                <li><NavLink to={"/"} activeClassName='categoryActive'>All</NavLink></li>
                <li><NavLink to={"/category/1"} activeClassName='categoryActive'>Embroidery</NavLink></li>
                <li><NavLink to={"/category/2"} activeClassName='categoryActive'>Drawings</NavLink></li>
                <li><NavLink to={"/category/3"} activeClassName='categoryActive'>Paper Art</NavLink></li>
            </ul>
        </div>
    )
}