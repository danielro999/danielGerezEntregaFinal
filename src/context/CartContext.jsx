import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => {
      const exists = prevCart.find((i) => i.id === product.id);

      if (exists) {
        return prevCart.map((i) =>
          i.id === product.id ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      }

      return [...prevCart, { ...product, cantidad: 1 }];
    });
  }

  function removeCart(id) {
    setCart((prevCart) => prevCart.filter((i) => i.id !== id));
  }

  function emptyCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeCart,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
