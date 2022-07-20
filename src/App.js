import './App.css';
import NavbarMio from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const onAdd = () => {
    console.log("agregado al carrito");
  }
  return (
    <div className="App">
      <NavbarMio />
      <ItemListContainer listarItem="Bienvenidos"/>
      <ItemCount stock={5} initial={0} onAdd={onAdd} />
      {/* <ItemListContainer listarItem="Bienvenidos"/> */}

      <ItemDetailContainer/> 
    </div>
  );
}

export default App;
