import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import Logo from './Logo';

const Navbar = () => {
  const { cart } = useCart();
  
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/products" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/feedback" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
              Feedback
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-primary-600 p-2 relative group">
              <ShoppingCartIcon className="h-6 w-6 transition-transform group-hover:scale-110" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 