// /src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import newsletterReducer from './newsletterSlice';

const store = configureStore({
  reducer: {
    newsletter: newsletterReducer,
  },
});

export default store;
