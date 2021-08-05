import React from 'react'
import {NavLink} from 'react-router-dom'
import './home.css'

export const Home = () => {

      
    return (
        <div className= "home">
            <div >
                <NavLink to={"/category/embroidery"}>
                    <div className="home_img" data-content="Embroidery">
                        <img src={process.env.PUBLIC_URL + "/multimedia/home/embroidery.jpg"} alt="embroidery" />
                    </div> 
                </NavLink>
                <NavLink to={"/category/drawings"}>
                    <div className="home_img" data-content="Drawings">
                        <img src={process.env.PUBLIC_URL + "/multimedia/home/drawings.jpg"} alt="drawings" />
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to={"/category/paper_art"}>
                    <div className="home_img" data-content="Paper art">
                        <img src={process.env.PUBLIC_URL + "/multimedia/home/paper_art.jpg"} alt="paper art" />
                    </div>
                </NavLink>
                <NavLink to={"/contact"}>
                    <div className="home_img" data-content="Comissions">
                        <img src={process.env.PUBLIC_URL + "/multimedia/home/comissions.jpg"} alt="comissions" />
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
