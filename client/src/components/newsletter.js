import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setSubscribed } from "../redux/newsletter/newsletterSlice";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Newsletter = () => {
  const dispatch = useDispatch();
  const { email, error, subscribed } = useSelector((state) => state);
  const [userEmail, setUserEmail] = useState("");

  const subscribeHandler = async () => {
    try {
      // Add any validation logic here before making the API call
      if (!userEmail) {
        dispatch(setError("Email is required"));
        return;
      }

      // Simulate an API call to subscribe the user
      console.log("Request Payload:", { email });
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_DOMAIN}/subscribe`,
        { email: userEmail }
      );

      if (response.data.alert === false) {
        // Email is already subscribed
        toast.error(response.data.message);
      } else {
        // Subscription successful
        toast.success(response.data.message);
        dispatch(setError(null));
        dispatch(setSubscribed(true));
      }
      // Clear any previous errors
      dispatch(setError(null));
      dispatch(setSubscribed(true));
    } catch (error) {
      toast.error("Subscription error:", error);

      // Handle subscription error, update state accordingly
      dispatch(setError("Failed to subscribe. Please try again."));
      dispatch(setSubscribed(false));
    } finally {
      // Clear the input form
      setUserEmail("");
    }
  };

  return (
    <>
      <Toaster />
      <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-white mb-6">
          Stay updated with the latest news and trends in the commodity market.
          Subscribe to our newsletter!
        </p>
        <div className="flex items-center mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="border-b-2 border-white bg-transparent text-white focus:outline-none placeholder-white flex-grow py-2 px-4"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button
            className="bg-white text-blue-500 py-2 md:px-6 px-3 rounded-full md:ml-4  hover:bg-blue-500 hover:text-white transition duration-300"
            onClick={subscribeHandler}
          >
            Subscribe
          </button>
        </div>
        <p className="text-white text-sm">
          By subscribing, you agree to receive our newsletter and acknowledge
          our{" "}
          <a href="#privacypolicy" className="underline">
            Privacy Policy
          </a>
          .
        </p>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {subscribed && (
          <p className="text-green-500 mt-2">Successfully subscribed!</p>
        )}
      </div>
    </>
  );
};

export default Newsletter;
