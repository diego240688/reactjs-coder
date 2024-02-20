import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from '../Context/Cartcontext'; 
const Navbar =() => {
  const { totalQuantity } = useContext(CartContext)
    return (
<div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="librero.png" alt="Bootstrap" width="45" height="45" />
          </Link>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Inicio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="genero/Novela">Novela</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="genero/Fantasía">Fantasía</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="genero/Educacion">Educacion</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="genero/Ciencia%20Ficción">Ciencia Ficción</Link>
                  </li>
                </ul>
                <CartWidget quantity={totalQuantity}/>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </div>
    )

}
export default Navbar;