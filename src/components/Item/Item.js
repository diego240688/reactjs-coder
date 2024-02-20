import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ id, titulo,  descripcion , img }) => {
  return (
    <div>
      <h4>{titulo}</h4>
      <picture>
          <img src={img} alt={titulo} className="ItemImg"/>
      </picture>
      <p>descripcion: {descripcion}</p>
      <Link to={`/item/${id}`} className="btn btn-primary" >Ver Detalles</Link>
    </div>
  );
};

export default Item;
