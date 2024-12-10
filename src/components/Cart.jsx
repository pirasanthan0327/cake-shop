import React from 'react';

export function Cart() {
  return (
    <div className="bg-white-50 py-10 mt-8 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Cart Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-teal-500 mt-20">Cart</h1>
        </div>

        {/* Cart Items Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
  {/* Single Cart Item */}
  <div className="flex items-center justify-between border-b pb-4 mb-4">
    <img
      src="src/assets/pexels-delphine-hourlay-91322-691147.jpg"
      alt="Cake Image"
      className="w-24 h-24 rounded-md object-cover"
    />
    <div className="flex-1  pl-6 ml-4">
      <h2 className="text-xl font-semibold pl-5 mr-6 text-teal-600">Chocolate Cake</h2>
      <p className="text-gray-700 pl-5 mr-6 mt-1">Delicious chocolate cake with rich frosting.</p>
    </div>
    <div className="flex items-center space-x-4">
      <input
        type="number"
        defaultValue="1"
        className="w-16 h-10 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      <p className="text-lg font-semibold text-gray-800">RS 100</p>
    </div>
  </div>

  {/* Total Price */}
  <div className="text-right mt-4">
    <h2 className="text-2xl font-bold text-teal-600">Total: RS 100</h2>
  </div>
</div>


        {/* Checkout Button */}
        <div className="text-center mt-8">
          <button className="bg-teal-500 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-teal-600 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
