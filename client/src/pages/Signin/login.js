import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes, FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import  toast, {Toaster} from 'react-hot-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    if (email && password) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_DOMAIN}/login`,
          data,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        const dataRes = response.data;
        console.log(dataRes);

        toast(dataRes.message, {
          duration: 4000,
          position: 'top-center',
        });

        if (dataRes.alert) {
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Error during login:', error);
        toast.error('Invalid email or password. Please try again.');
      }
    } else {
      toast.error('Please enter both email and password');
    }
  };

  return (
    <><Toaster/>
    <div className="md:flex md:flex-row h-screen w-full">
      <FaTimes
        className="absolute top-4 right-4 cursor-pointer text-white text-2xl "
        onClick={handleClose}
      />
      <div className="w-full flex flex-col justify-center md:w-1/2 bg-blue-400 p-10">
        <h1 className="text-4xl font-extrabold text-white mb-2 text-center">
          Welcome Back!
        </h1>
        <p className="text-white text-center font-bold text-xl mb-7">
          Don't have an account?{' '}
          <Link to="/signup" className="text-yellow-300">
            Sign Up
          </Link>
        </p>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 text-black shadow-xl rounded-md bg-slate-100 focus:outline-none"
              value={data.email}
              onChange={handleOnChange}
            />
          </div>
          {/* Password */}
          <div className="mb-4 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Password"
              className="w-full rounded-md p-3 text-black shadow-xl bg-slate-100 focus:outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {/* Login Button */}
          <div className="flex justify-center ">
            <button
              type="submit"
              className={`bg-green-300 text-white py-3 px-14 rounded-md font-bold shadow-md`}
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>

      {/* Right Section - Commodities Banner */}
      <div className=" md:w-1/2 bg-gray-800 h-full">
        <div className="md:h-full flex flex-col justify-center">
          <div className="text-white text-center mb-4 p-10">
            <h2 className="text-4xl font-extrabold mb-4">Explore Commodities</h2>
            <p className="text-lg mb-6">
              Discover a world of investment opportunities in commodities.
            </p>
            <Link
              to="/commodities"
              className="bg-yellow-300 text-gray-800 py-3 px-6 rounded-full mt-2"
            >
              Explore Now
            </Link>
          </div>
          <div className="text-white text-center ">
            <h2 className="text-4xl font-extrabold mb-3">Commodities Safari</h2>
            <p className="text-lg mb-6">
              Position Your Portfolio Strategically through
              <br />
              Thorough Commodities Analysis.
            </p>
            <Link
              to="/commodities"
              className="bg-yellow-300 text-gray-800 py-3 px-6 rounded-full mt-2"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
