import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  userData: null,
  isLoading: false, // Add loading state
};

// Slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteAccountRequest(state) {
      state.isLoading = true; // Set loading state to true when delete account request is initiated
    },
    deleteAccountSuccess(state) {
      state.isLoading = false; // Reset loading state upon account deletion success
      state.userData = null; // Clear user data after account deletion
    },
    deleteAccountFailure(state) {
      state.isLoading = false; // Reset loading state upon account deletion failure
    },
    signOutRequest(state) {
      state.isLoading = true; // Set loading state to true when sign-out request is initiated
    },
    signOutSuccess(state) {
      state.isLoading = false; // Reset loading state upon sign-out success
      state.userData = null; // Clear user data after sign-out
    },
    signOutFailure(state) {
      state.isLoading = false; // Reset loading state upon sign-out failure
    },
    updateUserData(state) {
      state.isLoading = true; // Set loading state to true when updating user data
    },
    updateUserDataSuccess(state, action) {
      state.isLoading = false; // Reset loading state upon updating user data success
      state.userData = action.payload;
    },
    updateUserDataFailure(state) {
      state.isLoading = false; // Reset loading state upon updating user data failure
    },
  },
});

// Actions
export const {
  deleteAccountRequest,
  deleteAccountSuccess,
  deleteAccountFailure,
  signOutRequest,
  signOutSuccess,
  signOutFailure,
  updateUserData,
  updateUserDataSuccess,
  updateUserDataFailure,
} = userSlice.actions;

// Reducer
export default userSlice.reducer;

// Selectors
export const selectUserData = (state) => state.user.userData;
export const selectIsLoading = (state) => state.user.isLoading;

