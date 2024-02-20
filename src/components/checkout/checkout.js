import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../Context/Cartcontext";
import { writeBatch, collection, query, where, documentId, getDocs, addDoc } from "firebase/firestore";
import { db } from "../servicios/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card } from 'react-bootstrap';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [buyerInfo, setBuyerInfo] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const { cart, totalToPay, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBuyerInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const createOrder = async () => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: buyerInfo,
                items: cart.map(item => ({
                    id: item.id,
                    titulo: item.titulo,
                    cantidad: item.quantity,
                    precio: item.precio,
                })),
                totalToPay
            };

            const batch = writeBatch(db);
            const ids = cart.map(prod => prod.id);
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids));
            const productsAddedToCartFromFirestore = await getDocs(productsRef);
            const { docs } = productsAddedToCartFromFirestore;
            const outOfStock = [];

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart.quantity;

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity});
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc});
                }
            });

            if(outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);

                const { id } = orderAdded;
                setOrderId(id);

                clearCart();

                setTimeout(() => {
                    navigate('/');
                }, 8000);
            } else {
                console.error('Hay productos fuera de stock');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if(loading) {
        return <h1>Generando orden...</h1>;
    }

    if (orderId) {
        return (
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card text-center">
                    <div className="card-body">
                        <h1 className="card-title">Detalle de tu compra</h1>
                        <p className="card-text">El ID de tu compra es: {orderId}</p>
                        <h2>Productos:</h2>
                        <ul className="list-group">
                        {cart.map((item) => (
                            <li key={item.id} className="list-group-item">
                                <p>Producto: {item.titulo}</p>
                                <p>Cantidad: {item.cantidad}</p>
                            </li>
))}

                        </ul>
                        <h2>MUCHAS GRACIAS POR SU COMPRA</h2>
                    </div>
                </div>
            </div>
        );
    }
    
    if(cart.length === 0) {
        return <h1>No hay productos en el carrito</h1>;
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <h1 className="mb-4">Checkout</h1>
                    <Form onSubmit={createOrder}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Ingresa tu nombre" onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="text" name="phone" placeholder="Ingresa tu teléfono" onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Ingresa tu correo electrónico" onChange={handleInputChange} />
                        </Form.Group>
                        <Button className="btn btn-primary" variant="primary" type="button" onClick={createOrder}>Generar orden</Button>

                        

                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Checkout;
