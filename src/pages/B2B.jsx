import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const B2B = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(10);
  const [businessDetails, setBusinessDetails] = useState({
    firmName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    gstNumber: ''
  });

  const bulkPricing = {
    'Soyabean Flour 500gms': {
      tiers: [
        { min: 10, max: 49, price: 65 },
        { min: 50, max: 99, price: 60 },
        { min: 100, max: 499, price: 55 },
        { min: 500, max: Infinity, price: 50 }
      ]
    },
    'Soyabean Flour 250gms': {
      tiers: [
        { min: 10, max: 49, price: 35 },
        { min: 50, max: 99, price: 32 },
        { min: 100, max: 499, price: 30 },
        { min: 500, max: Infinity, price: 28 }
      ]
    },
    'Soyabari 250gms': {
      tiers: [
        { min: 10, max: 49, price: 40 },
        { min: 50, max: 99, price: 38 },
        { min: 100, max: 499, price: 35 },
        { min: 500, max: Infinity, price: 32 }
      ]
    },
    'Soyabari 100gms': {
      tiers: [
        { min: 10, max: 49, price: 18 },
        { min: 50, max: 99, price: 16 },
        { min: 100, max: 499, price: 15 },
        { min: 500, max: Infinity, price: 14 }
      ]
    }
  };

  const getBulkPrice = (productName, qty) => {
    const tiers = bulkPricing[productName].tiers;
    const tier = tiers.find(t => qty >= t.min && qty <= t.max);
    return tier ? tier.price : tiers[tiers.length - 1].price;
  };

  const handleAddToCart = (product) => {
    const bulkPrice = getBulkPrice(product.name, quantity);
    const bulkProduct = {
      ...product,
      price: bulkPrice,
      quantity: quantity,
      isBulkOrder: true,
      businessDetails: businessDetails
    };
    addToCart(bulkProduct);
    navigate('/cart');
  };

  const handleBusinessDetailsChange = (e) => {
    const { name, value } = e.target;
    setBusinessDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bulk Orders for Businesses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get special wholesale prices for bulk orders. Perfect for retailers, distributors, and restaurants.
          </p>
        </div>

        {/* Bulk Order Calculator */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bulk Order Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Product
              </label>
              <select
                value={selectedProduct?.id || ''}
                onChange={(e) => setSelectedProduct(products.find(p => p.id === parseInt(e.target.value)))}
                className="w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Choose a product</option>
                {products.map(product => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity (units)
              </label>
              <input
                type="number"
                min="10"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          {/* Business Details Form */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Business Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Firm Name
                </label>
                <input
                  type="text"
                  name="firmName"
                  value={businessDetails.firmName}
                  onChange={handleBusinessDetailsChange}
                  className="w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Owner Name
                </label>
                <input
                  type="text"
                  name="ownerName"
                  value={businessDetails.ownerName}
                  onChange={handleBusinessDetailsChange}
                  className="w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={businessDetails.email}
                  onChange={handleBusinessDetailsChange}
                  className="w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={businessDetails.phone}
                  onChange={handleBusinessDetailsChange}
                  className="w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  name="address"
                  value={businessDetails.address}
                  onChange={handleBusinessDetailsChange}
                  className="w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GST Number
                </label>
                <input
                  type="text"
                  name="gstNumber"
                  value={businessDetails.gstNumber}
                  onChange={handleBusinessDetailsChange}
                  className="w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
            </div>
          </div>

          {selectedProduct && (
            <div className="mt-8">
              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Product</span>
                    <span className="text-gray-900">{selectedProduct.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quantity</span>
                    <span className="text-gray-900">{quantity} units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Unit Price</span>
                    <span className="text-gray-900">₹{getBulkPrice(selectedProduct.name, quantity)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-lg font-bold text-primary-600">
                        ₹{(getBulkPrice(selectedProduct.name, quantity) * quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(selectedProduct)}
                  disabled={!businessDetails.firmName || !businessDetails.ownerName || !businessDetails.email || !businessDetails.phone || !businessDetails.address || !businessDetails.gstNumber}
                  className="mt-6 w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Pricing Tiers */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bulk Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <div key={product.id} className="border rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">{product.name}</h3>
                <ul className="space-y-3">
                  {bulkPricing[product.name].tiers.map((tier, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-600">
                        {tier.min}-{tier.max === Infinity ? '∞' : tier.max} units
                      </span>
                      <span className="text-primary-600 font-medium">₹{tier.price}/unit</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Special Discounts</h3>
            <p className="text-gray-600">
              Get up to 30% off on bulk orders. The more you order, the more you save!
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Priority Shipping</h3>
            <p className="text-gray-600">
              Enjoy priority shipping and handling for all bulk orders.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Support</h3>
            <p className="text-gray-600">
              Get dedicated account management and support for your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2B; 