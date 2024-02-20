import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde React Router DOM
import ItemCart from "../ItemCart/ItemCart";
import { useCart } from "../Context/Cartcontext"; 

const CartList = () => {
  const { cart, totalToPay } = useCart();

  return (
    <>
      {cart.length === 0 ? (
        <div className="text-center my-4">
          <p>El carrito está vacío</p>
        </div>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Precio Unitario</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((prod) => (
                <ItemCart key={prod.id} {...prod} />
              ))}
            </tbody>
          </table>
          <div className="d-grid gap-2 col-6 mx-auto">
            <p>Total a pagar: ${totalToPay}</p>
            <Link to="/checkout" className="btn btn-primary btn-lg">Comprar</Link> 
          </div>
        </>
      )}
    </>
  );
};

export default CartList;



