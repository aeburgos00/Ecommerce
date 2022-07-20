import { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import products from "../../mock/products";
// import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  // const {idProd} = useParams();
  const idProd = 2;

  const traerProductoPorId = new Promise((res,rej) =>{
    setTimeout(()=>{
      res(products.find(prod => prod.id === idProd));
    }, 2000)
  })

  useEffect(()=>{ 
    traerProductoPorId.then((datos)=>{
      setItem(datos);
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [idProd])

    return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer;