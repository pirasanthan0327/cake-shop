import React from 'react';


export function Contact() {
  return (
    <div className="bg-gray-100 py-10 pt-10 mt-8  pb-10 mb-8 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Contact Us Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-500 mt-20">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Reach out to us for any inquiries, orders, or feedback. We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-500 mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Business Info and Map */}
          <div className="space-y-8">
            {/* Business Info */}
            <div>
              <h2 className="text-2xl font-semibold text-teal-500">Business Info</h2>
              <p className="mt-2 text-gray-600">
                <strong>Phone:</strong> +94 757850010 <br />
                <strong>Email:</strong> pirasanthan0327@gmail.com <br />
                <strong>Location:</strong> navlaer road mulankavil klinochchi
              </p>
            </div>

            {/* Map Section */}
            <div>
              <h2 className="text-2xl font-semibold text-teal-500">Our Location</h2>
              <div className="mt-4">
                <iframe
                  title="Cake Shop Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345094243!2d144.96305791531585!3d-37.81421797975165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776b8f1b013ad8!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1641873780138!5m2!1sen!2sau"
                  className="w-full h-48 border-0 rounded-lg"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
