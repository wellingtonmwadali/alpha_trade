// /src/redux/newsletterSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  error: null,
  subscribed: false,
};

const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSubscribed: (state, action) => {
      state.subscribed = action.payload;
    },
  },
});

export const { setEmail, setError, setSubscribed } = newsletterSlice.actions;

export default newsletterSlice.reducer;

  