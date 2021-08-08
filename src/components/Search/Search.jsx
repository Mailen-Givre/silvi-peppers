import { useState } from 'react';
import "./search.css"
import { useHistory } from 'react-router-dom';

export const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const history = useHistory();
    const onSubmit = e => {
        history.push(`/products/?s=${searchQuery}`)
        e.preventDefault()
    };
    
    return (
        <div>
            <form action="/" method="get" onSubmit={onSubmit}>
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search products</span>
                </label>
                <div className="menu_search">
                    <input type="text" id="header-search" name="s" placeholder='Search products by name' 
                    onInput={e => setSearchQuery(e.target.value)}
                    ></input>
                    <button type="submit"><svg className="menu_search_icon" fill="#fff" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30.5" >
                        <title>Search</title>
                        <path fillRule="evenodd" clipRule="evenodd" 
                        d="M29.3,26.6L22,19.2c1.5-2,2.5-4.5,2.5-7.2c0-6.6-5.5-12-12.2-12S0,5.4,0,12s5.5,12,12.2,12c2.3,0,4.5-0.7,6.4-1.8l7.6,7.6
                            c0.9,0.9,2.3,0.9,3.2,0C30.2,28.9,30.2,27.5,29.3,26.6z M3.7,12.1c0-4.7,3.8-8.4,8.6-8.4s8.6,3.8,8.6,8.4s-3.8,8.4-8.6,8.4
                            S3.7,16.8,3.7,12.1z" fill="#222222"></path>
                    </svg></button>
                </div>
            </form>
    </div>
    )
}
