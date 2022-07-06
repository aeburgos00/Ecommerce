import './App.css';
import NavbarMio from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavbarMio />
      <ItemListContainer listarItem="Prod1"/>
      <ItemListContainer listarItem="Prod2"/>
      <ItemListContainer listarItem="Prod3"/>
    </div>
  );
}

export default App;
