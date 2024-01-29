import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setError, setSubscribed } from '../redux/newsletterSlice';
import axios from 'axios';

const Newsletter = () => {
  const dispatch = useDispatch();
  const { email, error, subscribed } = useSelector((state) => state);

  const subscribeHandler = async () => {
    try {
      // Add any validation logic here before making the API call

      // For demonstration purposes, let's assume a successful subscription
      dispatch(setSubscribed(true));

      // Simulate an API call to subscribe the user
      const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/subscribe`,
       { email });

      console.log('Subscription successful:', response.data);

      // Clear any previous errors
      dispatch(setError(null));
    } catch (error) {
      console.error('Subscription error:', error);

      // Handle subscription error, update state accordingly
      dispatch(setError('Failed to subscribe. Please try again.'));
      dispatch(setSubscribed(false));
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-white mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-white mb-6">
        Stay updated with the latest news and trends in the commodity market. Subscribe to our newsletter!
      </p>
      <div className="flex items-center mb-4">
        <input
          type="email"
          placeholder="Your Email"
          className="border-b-2 border-white bg-transparent text-white focus:outline-none placeholder-white flex-grow py-2 px-4"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <button
          className="bg-white text-blue-500 py-2 px-6 rounded-full ml-4 hover:bg-blue-500 hover:text-white transition duration-300"
          onClick={subscribeHandler}
        >
          Subscribe
        </button>
      </div>
      <p className="text-white text-sm">
        By subscribing, you agree to receive our newsletter and acknowledge our{' '}
        <a href="#privacypolicy" className="underline">
          Privacy Policy
        </a>
        .
      </p>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {subscribed && <p className="text-green-500 mt-2">Successfully subscribed!</p>}
    </div>
  );
};

export default Newsletter;


