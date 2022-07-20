import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
  const {nombre, precio, stock, img, descripcion} = item;
  const onAdd = () => {
    console.log("agregaste al carrito");
  }
    return (
        <div className="d-flex">
            <img src={img} alt={nombre}/>
            <div className="d-flex flex-column  justify-content-center">
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <h4>${precio}</h4>
                <ItemCount stock={stock} initial={0} onAdd={onAdd} />
            </div>
        </div>
  )
}

export default ItemDetail;