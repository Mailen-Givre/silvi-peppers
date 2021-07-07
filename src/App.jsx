import './App.css';
import { Navbar } from "./components/NavBar";
import { Categories } from "./components/Categories";
import { ItemListContainer } from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from "./components/Footer"
import { ShopContext } from './context/ShopContext'
import { useState } from 'react';


function App() {
  const [listProducts, setListProducts] = useState([{id:1, name:'toto'}])
  const [cart, setCart] = useState([])
  return (
    <ShopContext.Provider value ={{listProducts, setListProducts, cart}}>
      <Router>
      <Navbar/>
      <Categories/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting = {'All the products'}/>
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer greeting = {'Products by category'}/>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer greeting = {'Product detail'}/>
          </Route>
          <Route path="*" component={() => <p>404</p>}></Route>  
        </Switch>
      <Footer/>
      </Router>
    </ShopContext.Provider>
  );
}

export default App;
