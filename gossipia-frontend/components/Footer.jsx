import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0">
            <h3 className="text-green-400 text-lg mb-2">Contact us:</h3>
            <p>Email: info@gossipia.com</p>
            <p>Phone: 123456789 </p>
            <p>Address: Software Block, CUCEK, Alappuzha, 688504</p>
          </div>

          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
          </div>

        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 Gossipia. All Rights Reserved.</p>
          <a href="#" className="text-white text-sm hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;