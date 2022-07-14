import { useEffect, useState } from 'react';
import products from '../../mock/products'
import ItemList from './ItemList';

const ItemListContainer = ({listarItem}) => {
  const [items, setItems] = useState([])

  useEffect(()=>{
    const traerProductos = new Promise((res,rej) =>{
      setTimeout(()=>{
        res(products);
      }, 2000)
    })
    traerProductos.then( (datos)=>{
      setItems(datos);
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])
  
  return (
    <div>
        <h2>{listarItem}</h2>
        <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer;
