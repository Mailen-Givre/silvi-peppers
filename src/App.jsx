import './App.css';
import { Navbar } from "./components/NavBar";
import { ItemListContainer } from "./containers/ItemListContainer";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={ItemListContainer}></Route>
        {/* <Route exact path="/:nombreUsuario" component={ItemListContainer}></Route>  */}
        <Route path="*" component={() => <p>404</p>}></Route>   
      </Switch>
    </BrowserRouter>

{/*       <ItemListContainer greeting = "Welcome"/> */}
    </>
  );
}

export default App;
