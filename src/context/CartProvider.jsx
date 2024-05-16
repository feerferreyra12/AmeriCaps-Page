import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";


export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {
      try {
        const productosEnLocalStorage = localStorage.getItem("cartProducts");
        return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
      } catch (error) {
        return [];
      }
    });
  
    
    useEffect(() => {
      localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    }, [cartItems]);


    const aumentarCantidad = (productId) => {
      const updatedCartItems = cartItems.map((productInCart) => {
        if (productInCart.id === productId) {
          return { ...productInCart, amount: productInCart.amount + 1 };
        } else return productInCart;
      });
      setCartItems(updatedCartItems);
    };

    const disminuirCantidad = (productId) => {
      const updatedCartItems = cartItems.map((productInCart) => {
        if (productInCart.id === productId) {
          if (productInCart.amount === 1) {
            return null; // Eliminar el producto del carrito
          } else {
            return { ...productInCart, amount: productInCart.amount - 1 };
          }
        } else return productInCart;
      }).filter(Boolean); // Eliminar los elementos nulos (productos eliminados)
      setCartItems(updatedCartItems);
    };

    const [agregado, setAgregado] = useState(false);

    const agregarCarrito = (product) => {

      const existingProduct = cartItems.find((productInCart) => productInCart.id === product.id);

      if (existingProduct) {
          aumentarCantidad(product.id);
          console.log('El producto ya está en el carrito');
      } else {
          setCartItems([...cartItems, { ...product, amount: 1 }]);
          console.log('Agregando el producto al carrito');
      }

      
      setAgregado(true);
      setTimeout(() => {
          setAgregado(false);
      }, 1000); 
  };


    const quitarCarrito = (productId) => {
      const updatedCartItems = cartItems.filter((productInCart) => productInCart.id !== productId);
      setCartItems(updatedCartItems);
    };
    


    return (
      /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
      <CartContext.Provider
        value={{ cartItems, aumentarCantidad, disminuirCantidad, quitarCarrito, agregarCarrito, agregado  }}
      >
        {children}
      </CartContext.Provider>
    );
  };