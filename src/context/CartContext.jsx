import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const newTotal = cart.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
    setTotal(newTotal);
  }, [cart]);

  const addToCart = (product) => {
    // For regular products (non-bulk orders)
    if (!product.isBulkOrder) {
      const existingItem = cart.find(item => 
        item.id === product.id && 
        !item.isBulkOrder
      );
      
      if (existingItem) {
        setCart(cart.map(item =>
          item.id === product.id && !item.isBulkOrder
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
        toast.success('Item added to cart!');
      } else {
        // Add new regular product with quantity 1
        setCart([...cart, { ...product, quantity: 1 }]);
        toast.success('Item added to cart!');
      }
    } 
    // For bulk orders
    else {
      // Check if this bulk order already exists
      const existingBulkOrder = cart.find(item => 
        item.id === product.id && 
        item.isBulkOrder && 
        JSON.stringify(item.businessDetails) === JSON.stringify(product.businessDetails)
      );
      
      if (existingBulkOrder) {
        setCart(cart.map(item =>
          item.id === product.id && 
          item.isBulkOrder && 
          JSON.stringify(item.businessDetails) === JSON.stringify(product.businessDetails)
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        ));
        toast.success('Bulk order updated!');
      } else {
        // Add new bulk order with specified quantity
        setCart([...cart, product]);
        toast.success('Bulk order added to cart!');
      }
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    toast.success('Item removed from cart!');
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      total,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext); 