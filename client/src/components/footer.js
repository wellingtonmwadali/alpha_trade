import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>
              We are Alpha Trade, your go-to platform for tracking historical
              commodities data. Our mission is to provide accurate and reliable
              information to help you make informed decisions.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-envelope mr-2"></i> admin@alphatrade.com
              </li>
              <li>
                <i className="fas fa-phone mr-2"></i> +1 (123) 456-7890
              </li>
              <li>
                <i className="fas fa-map-marker mr-2"></i> 123 Street, Thika,
                Kenya
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 mb-8 text-xl font-light">
            <ul className="footer-links flex justify-center lg:justify-end">
              <li className="mr-6">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li className="mr-6">
                <a href="/disclaimer">Disclaimer</a>
              </li>
              <li>
                <a href="/terms-and-conditions">Terms and Conditions</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center lg:text-right mt-6">
            &copy; 2024 Alpha Trade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
