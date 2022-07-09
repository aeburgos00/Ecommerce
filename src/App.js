import './App.css';
import NavbarMio from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const onAdd = () => {
    console.log("agregado al carrito");
  }
  return (
    <div className="App">
      <NavbarMio />
      <ItemListContainer listarItem="Prod1"/>
      <ItemListContainer listarItem="Prod2"/>
      <ItemListContainer listarItem="Prod3"/>
      <ItemCount stock={5} initial={0} onAdd={onAdd} />
    </div>
  );
}

export default App;
