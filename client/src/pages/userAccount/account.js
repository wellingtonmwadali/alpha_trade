import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteAccountRequest,
  deleteAccountSuccess,
  deleteAccountFailure,
  signOutRequest,
  signOutSuccess,
  signOutFailure,
  updateUserData,
  updateUserDataSuccess,
  updateUserDataFailure,
} from "../../redux/user/userSlice";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/Dashboard/sidebar";
import axios from "axios";

export default function Account() {
  const userData = useSelector((state) => state.user.userData);
  const isLoading = useSelector((state) => state.user.isLoading);
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const dispatch = useDispatch();

  // Function to fetch user data from backend

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_DOMAIN}/user`
        );
        dispatch(updateUserData(response.data));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [dispatch]);
  // Function to update the password
  const updatePassword = async () => {
    try {
      // Dispatch password update request action
      dispatch(updateUserData());

      // Make a request to update the user's password
      await axios.put(
        `${process.env.REACT_APP_SERVER_DOMAIN}/update-password`,
        { password }
      ); // Update the endpoint accordingly

      // Dispatch update password success action
      dispatch(updateUserDataSuccess());

      // Reset the password field after update
      setPassword("");
    } catch (error) {
      console.error("Error updating password:", error);
      // Dispatch update password failure action
      dispatch(updateUserDataFailure());
    }
  };

  // Function to delete the account
  const deleteAccount = async () => {
    try {
      // Dispatch delete account request action
      dispatch(deleteAccountRequest());

      // Make a request to delete the user account
      await axios.delete(
        `${process.env.REACT_APP_SERVER_DOMAIN}/delete-account`
      ); // Update the endpoint accordingly

      // Dispatch delete account success action
      dispatch(deleteAccountSuccess());

      // Redirect to the login page after successful deletion
      history.push("/login");
    } catch (error) {
      console.error("Error deleting account:", error);
      // Dispatch delete account failure action
      dispatch(deleteAccountFailure());
    }
  };

  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      // Dispatch sign out request action
      dispatch(signOutRequest());

      // Perform sign out logic

      // Dispatch sign out success action
      dispatch(signOutSuccess());
    } catch (error) {
      console.error("Error signing out:", error);
      // Dispatch sign out failure action
      dispatch(signOutFailure());
    }
  };

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
                <label className="block mb-2 text-sm font-bold">
                  Username:
                </label>
                <input
                  type="text"
                  defaultValue={userData.username}
                  readOnly
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold">Email:</label>
                <input
                  type="email"
                  defaultValue={userData.email}
                  readOnly
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold">
                  Password:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                onClick={updatePassword}
                className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
              >
                Update Password
              </button>
              <button
                onClick={deleteAccount}
                className="bg-red-500 text-white py-2 px-4 rounded-md mr-2"
              >
                Delete Account
              </button>
              <button
                onClick={handleSignOut}
                className="bg-gray-500 text-white py-2 px-4 rounded-md"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
