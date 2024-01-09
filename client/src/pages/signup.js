import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const SignupForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional logic to handle form submission
  };

  return (
    <div className='md:flex flex-col md:flex-row h-screen w-100'>
      <FaTimes
        className="absolute top-4 right-4 cursor-pointer text-white text-2xl md:hidden"
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
         placeholder="First Name"
         className="w-full rounded-md shadow-xl  p-3 text-black bg-slate-100 focus:outline-none"
       />
     </div>
     <div className="flex-1">
       <input
         type="text"
         placeholder="Last Name"
         className="w-full p-3 text-black rounded-md shadow-xl bg-slate-100 focus:outline-none"
       />
     </div>
   </div>
   {/* Email */}
   <div className="mb-4">
     <input
       type="email"
       placeholder="Email"
       className="w-full p-3 text-black shadow-xl rounded-md bg-slate-100 focus:outline-none"
     />
   </div>
   {/* Password */}
   <div className="mb-4">
     <input
       type="password"
       placeholder="Password"
       className="w-full rounded-md p-3 text-black shadow-xl bg-slate-100 focus:outline-none"
     />
   </div>
   {/* Confirm Password */}
   <div className="mb-4">
     <input
       type="password"
       placeholder="Confirm Password"
       className="w-full shadow-xl rounded-md p-3 text-black bg-slate-100 focus:outline-none"
     />
   </div>
   {/* Signup Button */}
   <div className='flex justify-center '>
     <button
       type="submit"
       className={`bg-green-300 text-white py-3 px-14 rounded-md font-bold shadow-md ${!isChecked && 'opacity-50 cursor-not-allowed'}`}
       disabled={!isChecked}
     >
       CREATE MY ACCOUNT
     </button>
   </div>
   {/* Terms and Conditions Checkbox */}
   <div className="mb-4">
     <label className=" text-white">
       <input
         type="checkbox"
         className="mr-2"
         onChange={(e) => setIsChecked(e.target.checked)}
       />
       By registering, you agree to our{' '}
       <Link to="/terms-and-conditions" className="text-yellow-300">
         General Terms and Conditions
       </Link>, and{' '}
       <Link to="/terms-and-conditions" className="text-yellow-300">
         {'  '}
         Privacy Policy
       </Link>
     </label>
   </div>
        </form>
      </div>

      {/* Right Section - Commodities Banner */}
      <div className="w-full md:w-1/2 bg-gray-800">
        <div className="h-full flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-4xl font-extrabold mb-4">Explore Commodities</h2>
            <p className="text-lg mb-6">
              Discover a world of investment opportunities in commodities.
            </p>
            <Link
              to="/commodities"
              className="bg-yellow-300 text-gray-800 py-3 px-6 rounded-full"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;












   