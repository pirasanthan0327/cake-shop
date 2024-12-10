import React from 'react';
import { FaRegSmile } from 'react-icons/fa'; // For icons representing values

export function Abouts() {
  return (
    <div className=" bg-blue-50  py-10 min-h-screen pt-10 pb-10">
      <div className="container mx-auto px-6">
        {/* About Us Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mt-8">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover our story, meet our team, and see why we are passionate about baking the best cakes for you!
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold  mt-6">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600">
            At PP Cake Shop, we are dedicated to bringing you delicious, freshly baked cakes made with love. 
            Our mission is to make every occasion special by offering cakes that not only taste great but also look 
            beautiful. From birthdays to weddings, we are here to help you celebrate in style!
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mt-6">Meet Our Team</h2>
          <div className="flex justify-center space-x-8 mt-8">
            {/* Team Member 1 */}
            <div className="text-center">
            <img 
  src="src/assets/logo.png" 
  alt="Team Member 1"
  className="rounded-full w-32 h-32 object-cover mb-4"
/>

              <h3 className="text-xl font-medium ">Thanu</h3>
              <p className="text-gray-600">Founder & Head Baker</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img 
                src="src/assets/logo.png" 
                alt="Team Member 2"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-medium ">Archchu</h3>
              <p className="text-gray-600">Co-Founder & Cake Designer</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="text-center mt-8">
          <h2 className="text-3xl font-semibold ">Why Choose Us?</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Unique Aspect 1 */}
            <div className="flex flex-col items-center">
              <FaRegSmile className=" text-4xl mb-4" />
              <h3 className="text-xl font-medium">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We use only the finest, locally sourced ingredients to ensure the best taste in every bite.
              </p>
            </div>
            {/* Unique Aspect 2 */}
            <div className="flex flex-col items-center">
              <FaRegSmile className="text-4xl mb-4" />
              <h3 className="text-xl font-medium ">Custom Designs</h3>
              <p className="text-gray-600">
                Whether it's for a wedding or a birthday, we offer custom cake designs tailored to your needs.
              </p>
            </div>
            {/* Unique Aspect 3 */}
            <div className="flex flex-col items-center">
              <FaRegSmile className=" text-4xl mb-4" />
              <h3 className="text-xl font-medium ">Customer Satisfaction</h3>
              <p className="text-gray-600">
                Our customers are our priority, and we strive to exceed expectations with every order.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center">
          <p className="text-lg mt-10 text-gray-600">Thank you for learning more about us. We look forward to serving you!</p>
        </div>
      </div>
    </div>
  );
}
