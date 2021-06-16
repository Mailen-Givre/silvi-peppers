import './App.css';
import { Navbar } from "./components/Navbar";
import { ItemList } from "./containers/ItemList";



function App() {
  return (
    <>
      <Navbar/>
      <ItemList greeting = "Yaaay"/>
    </>
  );
}

export default App;
