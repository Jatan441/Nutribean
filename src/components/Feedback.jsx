import { useState } from 'react';
import toast from 'react-hot-toast';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    rating: 5,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the feedback to your backend
    // For now, we'll just show a success message
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    
    toast.success('Thank you for your feedback!');
    setFeedback({
      name: '',
      email: '',
      rating: 5,
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Share Your Feedback</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={feedback.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 outline-none shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={feedback.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 outline-none shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <div className="mt-1 flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFeedback(prev => ({ ...prev, rating: star }))}
                    className={`text-2xl focus:outline-none ${
                      star <= feedback.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={feedback.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-2 border-gray-300 outline-none shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="Tell us about your experience..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-primary-600 text-white px-6 py-3 rounded-md transition-colors ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-700'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback; 