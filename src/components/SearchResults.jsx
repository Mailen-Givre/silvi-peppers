import { Item } from '../components/Item/Item';
import { AddCart } from '../components/AddCart/AddCart';
import {NavLink} from 'react-router-dom';


export const SearchResults = ({ items }) =>{

   const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const filterPosts = (items, query) => {
        if (!query) {
            return items;
        }
        return items.filter((items) => {
            const productName = items.title.toLowerCase();
            return productName.includes(query);
        });
    };

     const filteredPosts = filterPosts(items, query);
    
    return (
        <div>
            <div className="flex">
                 {filteredPosts.length ?
                 filteredPosts.map((items)=>{
                    return (
                        <div className="items">
                            <NavLink to={`/item/${items.id}`} key={items.id}>
                                <Item id={items.id} item={items}/>
                            </NavLink>
                            <AddCart id={items.id} item={items}/>
                        </div>
                    )
                }) : 
                <img src={process.env.PUBLIC_URL + "/multimedia/404search.png"} alt="404" className="notFound"/>}

            </div>
        </div>
    )
}
