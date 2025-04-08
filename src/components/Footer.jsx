import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Nutribean</h3>
            <p className="text-gray-300">Established in 2025, Nutribean is dedicated to bringing back the rich heritage of Indian food with a modern, health-conscious twist. Our journey began with a simple mission — to reintroduce traditional, nutritious foods into the lives of today's busy, urban families.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">Products</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white">Cart</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-300 hover:text-white">Share Feedback</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Email: support@nutribeanIndia.com</p>
            <p className="text-gray-300">Location: Sehore, Madhya Pradesh, India</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Nutribean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 