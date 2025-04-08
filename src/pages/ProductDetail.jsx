import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const product = products.find(p => p.id === parseInt(id));

  const handleAddToCart = () => {
    setIsAnimating(true);
    addToCart(product);
    setTimeout(() => setIsAnimating(false), 300);
  };

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
          <Link to="/products" className="mt-4 inline-block text-primary-600 hover:text-primary-700">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 sm:p-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[300px] sm:h-[400px] object-contain transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-4 text-gray-500">{product.description}</p>
          
          <div className="mt-6">
            <span className="text-xl sm:text-2xl font-bold text-primary-600">₹{product.price}</span>
          </div>

          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className={`w-full bg-primary-600 text-white px-4 py-3 rounded-md text-sm sm:text-base transition-all duration-300 ${
                isAnimating
                  ? 'bg-primary-700 transform scale-95'
                  : 'hover:bg-primary-700 hover:shadow-lg'
              }`}
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h2>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Category</dt>
                <dd className="mt-1 text-sm text-gray-900">{product.category}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Shipping</dt>
                <dd className="mt-1 text-sm text-gray-900">Free shipping on orders over ₹500</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 3)
            .map(relatedProduct => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link to={`/product/${relatedProduct.id}`} className="block aspect-w-1 aspect-h-1">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 sm:h-64 object-contain bg-white p-4 transform transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <div className="p-4 sm:p-6">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <h3 className="text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                  </Link>
                  <p className="mt-2 text-sm text-gray-500">{relatedProduct.description}</p>
                  <div className="mt-4">
                    <span className="text-lg font-bold text-primary-600">₹{relatedProduct.price}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 