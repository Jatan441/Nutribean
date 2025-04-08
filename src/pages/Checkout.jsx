import { useState } from 'react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import Feedback from '../components/Feedback';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showFeedback, setShowFeedback] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'expiryDate') {
      // Remove any non-digit characters
      const digitsOnly = value.replace(/\D/g, '');
      
      // Format as MM/YY
      let formattedValue = '';
      if (digitsOnly.length >= 1) {
        formattedValue = digitsOnly.slice(0, 2);
      }
      if (digitsOnly.length >= 3) {
        formattedValue += '/' + digitsOnly.slice(2, 4);
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success message
    toast.success('Order placed successfully! Thank you for your purchase.', {
      duration: 3000,
      position: 'top-center',
    });
    
    // Clear the cart
    clearCart();
    
    // Show feedback form
    setShowFeedback(true);
  };

  if (showFeedback) {
    return <Feedback />;
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
          <p className="mt-4 text-gray-500">Add some products to your cart before checking out.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-2 border-gray-300 outline-none shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-2 border-gray-300 outline-none shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 outline-none shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
            </div>

            {/* Shipping Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Information</h2>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 outline-none shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-2 border-gray-300 outline-none shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-2 border-gray-300 outline-none shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-2 border-gray-300 outline-none shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="card"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="card" className="text-sm font-medium text-gray-700">Credit/Debit Card</label>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="upi"
                    name="paymentMethod"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="upi" className="text-sm font-medium text-gray-700">UPI Payment</label>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="cod" className="text-sm font-medium text-gray-700">Cash on Delivery</label>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    required
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-2 border-gray-300 outline-none shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      required
                      value={formData.expiryDate}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-2 border-gray-300 outline-none shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      required
                      value={formData.cvv}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-2 border-gray-300 outline-none shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div>
                <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">
                  UPI ID
                </label>
                <input
                  type="text"
                  id="upiId"
                  name="upiId"
                  placeholder="example@upi"
                  required
                  value={formData.upiId}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 outline-none shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
            )}

            {paymentMethod === 'cod' && (
              <div className="bg-yellow-50 p-4 rounded-md">
                <p className="text-sm text-yellow-700">
                  Cash on Delivery is available. You'll need to pay ₹{getCartTotal().toFixed(2)} at the time of delivery.
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
            >
              {paymentMethod === 'cod' ? 'Place Order' : 'Pay and Place Order'} - ₹{getCartTotal().toFixed(2)}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span className="text-gray-600">
                    {item.name} x {item.quantity}
                  </span>
                  <span className="text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-base font-medium text-gray-900">Subtotal</span>
                  <span className="text-base font-medium text-gray-900">
                    ₹{getCartTotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-base font-medium text-gray-900">Shipping</span>
                  <span className="text-base font-medium text-gray-900">Free</span>
                </div>
                <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
                  <span className="text-lg font-medium text-gray-900">Total</span>
                  <span className="text-lg font-medium text-gray-900">
                    ₹{getCartTotal().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 