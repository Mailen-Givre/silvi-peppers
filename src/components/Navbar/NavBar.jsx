import './navBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import {NavLink, Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
    const { pathname } = useLocation();
    console.log(pathname)

    
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
                    <div className="menu_search">
                        <input type="text" name="search" placeholder='Search'></input>
                        <svg className="menu_search_icon" fill="#fff" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30.5" >
                            <title>Search</title>
                            <path fill-rule="evenodd" clip-rule="evenodd" 
                            d="M29.3,26.6L22,19.2c1.5-2,2.5-4.5,2.5-7.2c0-6.6-5.5-12-12.2-12S0,5.4,0,12s5.5,12,12.2,12c2.3,0,4.5-0.7,6.4-1.8l7.6,7.6
                                c0.9,0.9,2.3,0.9,3.2,0C30.2,28.9,30.2,27.5,29.3,26.6z M3.7,12.1c0-4.7,3.8-8.4,8.6-8.4s8.6,3.8,8.6,8.4s-3.8,8.4-8.6,8.4
                                S3.7,16.8,3.7,12.1z" fill="#222222"></path>
                        </svg>
                    </div>
                    <div className="menu_icons">
                    <svg className="menu__imgs"  xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512" width="30"> <title>Favourites</title>
                        <g id="Capa_1">
                            <path stroke="black" stroke-width="10%" fill="black" d="M256,483.5c-7.3,0-14.3-2.6-19.8-7.4C215.5,458,195.6,441,178,426l-0.1-0.1C126.3,382,81.8,344,50.8,306.6
                                C16.1,264.8,0,225.2,0,181.9C0,139.8,14.4,101,40.6,72.6C67.1,43.8,103.5,28,143,28c29.6,0,56.6,9.3,80.4,27.8
                                c12,9.3,22.9,20.7,32.5,34c9.6-13.3,20.5-24.7,32.5-34C312.4,37.3,339.4,28,369,28c39.5,0,75.9,15.8,102.4,44.6
                                C497.6,101,512,139.8,512,181.9c0,43.3-16.1,82.9-50.8,124.7c-31,37.4-75.5,75.4-127.1,119.3c-17.6,15-37.6,32-58.3,50.2
                                C270.3,480.9,263.3,483.5,256,483.5z"/>
                        </g>
                        <g id="fill_x5F_heart">
                            <path fill="white" class="st0" d="M144,59C113,59,84.4,71.4,63.7,93.9c-21.1,22.9-32.7,54.4-32.7,89c0,36.4,13.5,69,43.9,105.6
                                c29.3,35.4,73,72.6,123.5,115.6l0.1,0.1c17.7,15.1,37.7,32.1,58.5,50.3c21-18.3,41-35.3,58.7-50.4c50.5-43.1,94.1-80.2,123.5-115.6
                                c30.3-36.6,43.9-69.2,43.9-105.6c0-34.5-11.6-66.1-32.7-89C429.6,71.4,401,59,370,59c-22.8,0-43.7,7.2-62.1,21.5
                                c-16.4,12.7-27.9,28.8-34.6,40c-3.5,5.8-9.5,9.2-16.3,9.2s-12.8-3.5-16.3-9.2c-6.7-11.3-18.2-27.3-34.6-40
                                C187.7,66.2,166.8,59,144,59z"/>
                        </g>
                    </svg>

                    <svg className="menu__imgs" id="menu_user"  xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 512 512" width="30"> <title>Log in</title>
                        <g id="Capa_1">
                            <g>
                                <g>
                                    <g>
                                        <path stroke="black" stroke-width="6%" fill="black" d="M437,331c-27.9-27.9-61.1-48.5-97.3-61c38.8-26.7,64.3-71.4,64.3-122C404,66.4,337.6,0,256,0S108,66.4,108,148
                                            c0,50.5,25.5,95.3,64.3,122c-36.2,12.5-69.4,33.1-97.3,61C26.6,379.3,0,443.6,0,512h40c0-119.1,96.9-216,216-216
                                            s216,96.9,216,216h40C512,443.6,485.4,379.3,437,331z"/>
                                    </g>
                                </g>
                                <g id="fill_x5F_user_2_">
                                    <circle class="st0" cx="256" cy="148" r="108"/>
                                </g>
                            </g>
                        </g>
                        <g id="fill_x5F_user_1_" class="st1">
                            <g id="fill_x5F_user" class="st2">
                                <circle fill="white" class="st0" cx="256" cy="148" r="108"/>
                                <path fill="white" class="st0" d="M472,512c0-0.7,0-1.3,0-2c0-119.3-96.7-216-216-216S40,390.7,40,510c0,0.7,0,1.3,0,2H472z"/>
                            </g>
                        </g>
                    </svg>              

                    <svg className="menu__imgs"  xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512" width="30"> <title>Orders</title>
                        <g id="fill_orders">
                            <path fill="white" class="st0" d="M192,64h32c8.8,0,16-7.2,16-16s7.2-16,16-16s16,7.2,16,16s7.2,16,16,16h32v32H192V64z"/>
                            <path fill="white" class="st0" d="M416,480H96V96h64v16c0,8.8,7.2,16,16,16h160c8.8,0,16-7.2,16-16V96h64V480z"/>
                        </g>
                        <g id="Capa_1">
                            <g>
                                <g>
                                    <path stroke="black" stroke-width="3%" d="M251.3,196.7c-6.2-6.2-16.4-6.3-22.7,0L176,249.4l-20.7-20.7c-6.2-6.2-16.4-6.2-22.6,0s-6.2,16.4,0,22.6l32,32
                                        c3.1,3.1,7.2,4.7,11.3,4.7s8.2-1.6,11.3-4.7l64-64C257.6,213.1,257.6,202.9,251.3,196.7z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path stroke="black" stroke-width="3%" d="M251.3,324.7c-6.2-6.2-16.4-6.3-22.7,0L176,377.4l-20.7-20.7c-6.2-6.2-16.4-6.2-22.6,0s-6.2,16.4,0,22.6l32,32
                                        c3.1,3.1,7.2,4.7,11.3,4.7s8.2-1.6,11.3-4.7l64-64C257.6,341.1,257.6,330.9,251.3,324.7z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path stroke="black" stroke-width="3%" d="M368,224h-64c-8.8,0-16,7.2-16,16s7.2,16,16,16h64c8.8,0,16-7.2,16-16S376.8,224,368,224z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path stroke="black" stroke-width="3%" d="M368,352h-64c-8.8,0-16,7.2-16,16s7.2,16,16,16h64c8.8,0,16-7.2,16-16S376.8,352,368,352z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path stroke="black" stroke-width="3%" d="M416,64h-64V48c0-8.8-7.2-16-16-16h-34.7C294.7,13.4,276.9,0,256,0s-38.7,13.4-45.3,32H176c-8.8,0-16,7.2-16,16v16H96
                                        c-17.6,0-32,14.4-32,32v384c0,17.6,14.4,32,32,32h320c17.6,0,32-14.4,32-32V96C448,78.4,433.6,64,416,64z M192,64h32
                                        c8.8,0,16-7.2,16-16s7.2-16,16-16s16,7.2,16,16s7.2,16,16,16h32v32H192V64z M416,480H96V96h64v16c0,8.8,7.2,16,16,16h160
                                        c8.8,0,16-7.2,16-16V96h64V480z"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                    
                    <CartWidget/>
                    
                    </div>
                    
                </div>
            </div>
        </>
    )
}