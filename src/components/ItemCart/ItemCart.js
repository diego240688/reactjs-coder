import React, { useContext } from "react";
import { CartContext } from "../Context/Cartcontext";


const ItemCart = ({ id, titulo, quantity, precio }) => {
  const { eliminarItem, incrementarCantidad, decrementarCantidad } = useContext(CartContext);
  const subtotal = precio * quantity;


  return (
    <tr>
      <td>{titulo}</td>
      <td>${precio}</td>
      <td>{quantity}</td>
      <td>${subtotal}</td>
      <td>
        <button  type="button" className="btn btn-primary btn-sm "onClick={() => eliminarItem(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default ItemCart;



