import './App.css';
import { Navbar } from "./components/Navbar/NavBar";
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from "./components/Footer/Footer"
import { Cart } from './components/Cart/Cart'
import { Checkout } from './components/Checkout/Checkout'
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { CartProvider } from './context/CartContext';
import { SearchContainer } from './containers/SearchContainer/SearchContainer';
import { Order } from './components/Order/Order'

function App() {
   return (
    <div className="page-container">
    <CartProvider>
      <Router>
      <Navbar/>
      <div className="container">
        <Switch >
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/products" >
            <SearchContainer/>
          </Route> 
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/category/all">
            <ItemListContainer greeting = {'All the products'}/>
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer greeting = {'Products by category'}/>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer/>
          </Route>
          <Route path="/cart">
              <Cart/>
          </Route>
          <Route path="/checkout">
              <Checkout/>
          </Route>
          <Route path="/order">
              <Order/>
          </Route>
          <Route path="*" component={() => <img src={process.env.PUBLIC_URL + "/multimedia/404.png"} alt="404" className="notFound"/>}></Route>
        </Switch>
        </div>
      <Footer/>
      </Router>
    </CartProvider>
    </div>
  );
}

export default App;
