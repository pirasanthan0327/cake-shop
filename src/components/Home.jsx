import React, { useState } from 'react';
import cakeImage from '../assets/pexels-lilartsy-1793037.jpg'; // Sample cake image for featured cakes
import cakeImage2 from '../assets/pexels-pixabay-162688.jpg';
import cakeImage3 from '../assets/pexels-pixabay-264939.jpg';
import cakeImage4 from '../assets/pexels-polina-tankilevitch-4110012.jpg';
import cakeImage5 from '../assets/pexels-chiecharon-1027811.jpg';
import cakeImage6 from '../assets/pexels-delphine-hourlay-91322-691147.jpg';
import './Nav.css'; // Import the external CSS

function Home() {
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      {/* Cake Categories Section */}
      <section className="py-20 bg-blue-50 pt-5 pb-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 mt-6">Cake Categories</h2>
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => handleCategoryClick('Wedding Cakes')}
              className={`text-xl font-semibold ${
                activeCategory === 'Wedding Cakes' ? 'text-teal-500' : 'text-gray-700'
              }`}
            >
              Wedding Cakes
            </button>
            <button
              onClick={() => handleCategoryClick('Birthday Cakes')}
              className={`text-xl font-semibold ${
                activeCategory === 'Birthday Cakes' ? 'text-teal-500' : 'text-gray-700'
              }`}
            >
              Birthday Cakes
            </button>
            <button
              onClick={() => handleCategoryClick('Custom Cakes')}
              className={`text-xl font-semibold ${
                activeCategory === 'Custom Cakes' ? 'text-teal-500' : 'text-gray-700'
              }`}
            >
              Custom Cakes
            </button>
          </div>
        </div>
      </section>

      {/* Featured Cakes Section */}
      <section className="py-20 bg-gray-50 pb-5 pt-5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Featured Cakes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[cakeImage, cakeImage2, cakeImage3, cakeImage4, cakeImage5, cakeImage6].map(
              (image, index) => (
                <div key={index} className="featured-card bg-white p-6 shadow-lg rounded-lg">
                  <img
                    src={image}
                    alt={`Cake ${index + 1}`}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h3 className="text-2xl mt-4">Cake {index + 1}</h3>
                  <p className="mt-2 text-lg">Delicious cake with special flavors.</p>
                  <button className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-lg">
                    Order Now
                  </button>

                  {/* Hover Popup */}
                  <div className="popup">
                    <div className="popup-content">
                      <h4 className="text-xl font-bold">Cake {index + 1}</h4>
                      <p>Price: ₹{500 + index * 50}</p>
                      <button>View Details</button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
