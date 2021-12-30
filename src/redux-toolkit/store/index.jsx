import { configureStore } from '@reduxjs/toolkit';
import isLogged from '../slices/isLogged';

export default configureStore({
  reducer: {
    isLogged
  }
})