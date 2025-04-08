import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();
  const [animatingItems, setAnimatingItems] = useState(new Set());

  const categories = ['all', ...new Set(products.map(product => product.category))];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    setAnimatingItems(prev => new Set([...prev, product.id]));
    addToCart(product);
    setTimeout(() => {
      setAnimatingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 300);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map(product => (
          <div 
            key={product.id} 
            className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 ${
              animatingItems.has(product.id) ? 'scale-95' : ''
            }`}
          >
            <Link to={`/product/${product.id}`} className="block aspect-w-1 aspect-h-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain bg-white p-4 transform transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <div className="p-4 sm:p-6">
              <Link to={`/product/${product.id}`}>
                <h3 className="text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="mt-2 text-sm text-gray-500">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-primary-600">₹{product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`bg-primary-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md text-sm transition-all duration-300
                    ${animatingItems.has(product.id)
                      ? 'bg-primary-700 transform scale-95'
                      : 'hover:bg-primary-700 hover:shadow-lg'
                    }`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 