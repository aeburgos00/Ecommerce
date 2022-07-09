import { useState } from 'react';
import {Card, Button} from 'react-bootstrap'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial)
    
    const restar = () => {
        if(count>initial)
            setCount(count-1)
    }

    const sumar = () => {
        if(count<stock)
            setCount(count+1)
    }

    return (
        <div className='contadorContenedor'>
            <Card className='contador' >
                <Card.Body>
                    <Card.Title>Producto</Card.Title>
                    <div className='btnContador'>
                        <Button className='btnCircular' onClick={restar}>-</Button>
                        <p>{count}</p>
                        <Button onClick={sumar}>+</Button>
                    </div>
                    <div className='btnPrin'>
                        <Button onClick={onAdd}>Agregar al carrito</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemCount;


