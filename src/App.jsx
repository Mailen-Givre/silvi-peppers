import './App.css';
import { Navbar } from "./components/NavBar";
import { ItemListContainer } from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from "./components/Footer"
import { CustomProvider } from './context/ShopContext'
import { Cart } from './components/Cart'



function App() {
   return (
    <CustomProvider>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/">
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
          <Route path="*" component={() => <p>404</p>}></Route>
        </Switch>
      {/* <Footer/> */}
      </Router>
    </CustomProvider>
  );
}

export default App;
