import { configureStore } from '@reduxjs/toolkit';
import isLogged from '../slices/isLogged';
import auth from '../slices/auth';

export default configureStore({
  reducer: {
    logIn: isLogged,
    auth
  }
})