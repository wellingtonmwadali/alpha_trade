import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/Dashboard/sidebar';
import axios from 'axios';

const Account = () => {
  const [userData, setUserData] = useState(null);
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  // Function to fetch user account information from the backend
  const fetchUserData = async () => {
    try {
      // Make a request to fetch user data
      const response = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`);
      setUserData(response.data);
      console.log(response)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Function to update the password
  const updatePassword = async () => {
    try {
      // Make a request to update the user's password
      await axios.put(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`, { password }); // Update the endpoint accordingly
      // Reset the password field after update
      setPassword('');
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  // Function to delete the account
  const deleteAccount = async () => {
    try {
      // Make a request to delete the user account
      await axios.delete(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`); // Update the endpoint accordingly
      // Redirect to the login page after successful deletion
      navigate.push('/login');
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  // Function to handle sign out
  const handleSignOut = () => {
    // Implement sign out logic
  };

  useEffect(() => {
    // Fetch user data on component mount
    fetchUserData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="md:flex md:flex-col md:w-4/5 p-4">
          {/* Display user account information */}
          {userData && (
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-4">Account Information</h2>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold">Username:</label>
                <input
                  type="text"
                  value={userData.username}
                  readOnly
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold">Email:</label>
                <input
                  type="email"
                  value={userData.email}
                  readOnly
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold">New Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <button onClick={updatePassword} className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2">Update Password</button>
              <button onClick={deleteAccount} className="bg-red-500 text-white py-2 px-4 rounded-md mr-2">Delete Account</button>
              <button onClick={handleSignOut} className="bg-gray-500 text-white py-2 px-4 rounded-md">Sign Out</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;

