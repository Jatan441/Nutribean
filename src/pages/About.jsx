import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-64 bg-primary-600">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Welcome to Nutribean India</h1>
              <p className="text-xl text-white italic">Where tradition meets nutrition</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="p-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <section>
              <p className="text-lg text-gray-700 leading-relaxed">
                Established in 2025, Nutribean is dedicated to bringing back the rich heritage of Indian food with a modern, health-conscious twist. Our journey began with a simple mission — to reintroduce traditional, nutritious foods into the lives of today's busy, urban families.
              </p>
            </section>

            {/* Flagship Product */}
            <section className="bg-primary-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Our Signature Product</h2>
              <p className="text-gray-700 leading-relaxed">
                At the heart of Nutribean lies our flagship product, Nutribean's Soyabari — a wholesome, protein-rich soybean product made using age-old techniques, coarse soybean flour, and authentic Indian spices. Our Soyabari is sun-dried for maximum flavor and shelf-life, capturing the essence of traditional Indian kitchens in every bite.
              </p>
            </section>

            {/* Manufacturing */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Excellence</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our Manufacturing Plant, located in the serene town of Sehore, Madhya Pradesh, is where innovation blends with heritage. Equipped with modern machinery and quality control systems, we ensure that every product that leaves our facility is pure, safe, and packed with health.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Modern Machinery
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Quality Control Systems
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Pure & Safe Products
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Health-Focused Production
                  </li>
                </ul>
              </div>
            </section>

            {/* Community */}
            <section className="text-center bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Community</h2>
              <p className="text-gray-700 leading-relaxed">
                At NutribeanIndia.com, we aim to build a community that values health without compromising on taste. Whether you're a homemaker preparing wholesome meals, a professional looking for healthy options, or someone who simply appreciates the wisdom of traditional foods — Nutribean is here for you.
              </p>
            </section>

            {/* Tagline */}
            <section className="text-center py-8">
              <p className="text-2xl font-bold text-primary-600 italic">
                Nutribean — A Heritage of Health
              </p>
            </section>

            {/* Location */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-gray-700">
                    <span className="font-semibold">Location:</span> Sehore, Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 