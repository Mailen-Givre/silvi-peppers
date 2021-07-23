import '../css/Categories.css'
import {NavLink} from 'react-router-dom'

export const Categories = () => {
    return (
        <div className='categories'>
            <ul>
                <li><NavLink to={"/"} activeClassName='categoryActive'>All</NavLink></li>
                <li><NavLink to={"/category/embroidery"} activeClassName='categoryActive'>Embroidery</NavLink></li>
                <li><NavLink to={"/category/drawings"} activeClassName='categoryActive'>Drawings</NavLink></li>
                <li><NavLink to={"/category/paper_art"} activeClassName='categoryActive'>Paper Art</NavLink></li>
            </ul>
        </div>
    )
}