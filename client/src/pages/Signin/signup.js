import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes, FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import toast, {Toaster}  from 'react-hot-toast';
import {auth,provider} from './config';
import {signInWithPopup} from "@firebase/auth"

const Signup = () => {
  const [setEmailValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };
  const handleGoogleSignUp = async () => {
    try {
      const googleAuthData = await signInWithPopup(auth, provider);

      // Extract user information from Google authentication
      const { email, displayName, uid } = googleAuthData.user;

      // Store user in MongoDB database
      await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`, {
        email,
        displayName,
        uid,
      });

      // Update component state with the user's email
      setEmailValue(email);

      // Store email in localStorage for future use
      localStorage.setItem('email', email);

      // Redirect to the dashboard page
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during Google sign-up:', error);
      toast.error('An error occurred during Google sign-up. Please try again.');
    }
  };

  
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
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
    const { firstName, lastName, email, password, confirmPassword } = data;
  
    if (firstName && lastName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`, data, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log(data)//check user information 
          const dataRes = response.data;
          console.log(dataRes);
          toast.success(dataRes.message,{
            duration: 4000,
          });
          //alert(dataRes.message)
          if (dataRes.alert) {
            navigate('/login');
          }
        } catch (error) {
          console.error('Error during signup:', error);
          toast.error('An error occurred during signup. Please try again.');
        }
      } else {
        toast.error('Password and Confirm Password do not match');
      }
    } else {
      toast.error('Please enter all required fields');
    }
  };
  

  return (
    <>
    <Toaster/>

    <div className='md:flex  md:flex-row h-screen w-full'>
      <FaTimes
        className="absolute top-4 right-4 cursor-pointer text-white text-2xl "
        onClick={handleClose}
      />
      <div className="w-full md:w-1/2 bg-blue-400 p-10">
        <h1 className="text-4xl font-extrabold text-white mb-2 text-center">Create your account</h1>
        <p className="text-white text-center font-bold text-xl mb-7">
          Already have an account?{' '}
          <Link to="/login" className="text-yellow-300">
            Login
          </Link>
        </p>
        <form onSubmit={handleSubmit}>
          {/* Rest of the form */}
            {/* First Name and Last Name */}
     <div className="flex space-x-4 mb-4">
     <div className="flex-1">
       <input
         type="text"
         id="firstName"
         name="firstName"
         placeholder="First Name"
         className="w-full rounded-md shadow-xl  p-2 text-black bg-slate-100 focus:outline-none"
         value={data.firstName}
         onChange={handleOnChange}
       />
     </div>
     <div className="flex-1">
       <input
         type="text"
         id="lastName"
         name="lastName"
         placeholder="Last Name"
         className="w-full p-2 text-black rounded-md shadow-xl bg-slate-100 focus:outline-none"
         value={data.lastName}
         onChange={handleOnChange}
       />
     </div>
   </div>
   {/* Email */}
   <div className="mb-4">
     <input
       type="email"
       id="email"
       name="email"
       placeholder="Email"
       className="w-full p-2 text-black shadow-xl rounded-md bg-slate-100 focus:outline-none"
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
            className="w-full rounded-md p-2 text-black shadow-xl bg-slate-100 focus:outline-none"
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
        <div className="mb-4 relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full shadow-xl rounded-md p-2 text-black bg-slate-100 focus:outline-none"
            value={data.confirmPassword}
            onChange={handleOnChange}
          />
          <span
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            onClick={handleShowConfirmPassword}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
   {/* Signup Button */}
   <div className='flex justify-center '>
     <button
       type="submit"
       className={`bg-green-300 text-white py-2 px-14 rounded-md font-bold shadow-md ${!isChecked && 'opacity-50 cursor-not-allowed'}`}
       disabled={!isChecked}
     >
       CREATE MY ACCOUNT
     </button>
   </div>
   <div className='flex justify-center mt-2'>
    
    <button
    className='bg-red-300 text-white py-2 px-14 rounded-md font-bold shadow-md'
    onClick={handleGoogleSignUp}>Signin with Google</button>
  </div>
   {/* Terms and Conditions Checkbox */}
   <div className="mt-4">
     <label className=" text-white">
       <input
         type="checkbox"
         className="mr-2"
         onChange={(e) => setIsChecked(e.target.checked)}
       />
       By registering, you agree to our{' '}
       <Link to="/terms-and-conditions" className="text-yellow-300">

         General Terms and conditions
       </Link>, and{' '}
       <Link to="/privacy-policy" className="text-yellow-300">
         {'  '}
         Privacy policy
         </Link>
     </label>
   </div>
        </form>
      </div>

      {/* Right Section - Commodities Banner */}
      <div className=" md:w-1/2 bg-gray-800 h-full">
        <div className="md:h-full md:flex flex-col justify-center">
          <div className="text-white text-center mb-4 p-10">
            <h2 className="text-4xl font-extrabold mb-4 ">Explore Commodities</h2>
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
            <h2 className="text-4xl font-extrabold mb-3 ">Commodities Safari</h2>
            <p className="text-lg mb-6">
            Position Your Portfolio Strategically through<br></br> Thorough Commodities Analysis.
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

export default Signup;












   
