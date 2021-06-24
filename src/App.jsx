import './App.css';
import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./containers/ItemList";

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting = "Welcome"/>
    </>
  );
}

export default App;
