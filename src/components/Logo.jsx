import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <div className="relative">
        <img 
          src="/nutribean-logo.png" 
          alt="Nutribean Logo" 
          className="w-16 h-16 object-contain transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-[#006400] tracking-wider">NUTRIBEAN</span>
        <span className="text-sm text-[#006400] font-medium">Sehat Me Behatreen</span>
      </div>
    </Link>
  );
};

export default Logo; 