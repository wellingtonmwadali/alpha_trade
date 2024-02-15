// /src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import newsletterReducer from './newsletter/newsletterSlice';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    newsletter: newsletterReducer,
    user: userReducer, 
  },
});

export default store;
