import React, { useState, useContext } from 'react';
import ItemCount from '../Itemcout/Itemcout';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/Cartcontext';
import { NotificationContext } from '../servicios/NotificationContext.';
import './Itemdetil.css'

const ItemDetail = ({ id, titulo, genero, precio, stock, descripcion, img }) => {
    const [quantity, setQuantity] = useState(0);
    const { addItem } = useContext(CartContext);
    const setNotification = useContext(NotificationContext);

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito: ', quantity);
        setQuantity(parseInt(quantity));
        addItem({ id, titulo, quantity, precio });
        setNotification('error',`Se agregó correctamente ${quantity} ${titulo}`, 5);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card border shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">{titulo}</h2>
                            <picture>
                                    <img src={img} alt={titulo} className="ItemImg"/>
                            </picture>
                            <p className="card-text">Género: {genero}</p>
                            <p className="card-text">Descripción: {descripcion}</p>
                            <p className="card-text">Precio: ${precio}</p>
                            <footer>
                                {quantity > 0 ? (
                                    <Link to='/cart'>
                                        <button type="button" className="btn btn-primary btn-sm">Terminar compra</button>
                                    </Link>
                                ) : (
                                    <ItemCount stock={stock} onAdd={handleOnAdd} />
                                )}
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;


