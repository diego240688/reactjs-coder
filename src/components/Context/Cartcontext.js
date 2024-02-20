import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext({
  cart: []
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productoadd) => {
    if (!isInCart(productoadd.id))
      setCart((prev) => [...prev, productoadd]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const eliminarItem = (id) => {
    const cartUpdated = cart.filter(prod => prod.id !== id)
    setCart(cartUpdated)
  };

  const incrementarCantidad = (id) => {
    const cartUpdated = cart.map(prod => {
      if (prod.id === id && prod.quantity < prod.stock) {
        return { ...prod, quantity: prod.quantity + 1 };
      }
      return prod;
    });
    setCart(cartUpdated);
  };

  const decrementarCantidad = (id) => {
    const cartUpdated = cart.map(prod => {
      if (prod.id === id && prod.quantity > 1) {
        return { ...prod, quantity: prod.quantity - 1 };
      }
      return prod;
    });
    setCart(cartUpdated);
  };

  const gettotalQuantity = () => {
    let accu = 0;
    cart.forEach(prod => accu += prod.quantity);
    return accu;
  };

  const getTotalToPay = () => {
    const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
    return total;
  };

  const totalQuantity = gettotalQuantity();
  const totalToPay = getTotalToPay();

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, totalQuantity, eliminarItem, totalToPay, incrementarCantidad, decrementarCantidad, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
