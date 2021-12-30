import { createSlice } from '@reduxjs/toolkit';

export const isLoggedSliced = createSlice({
  name: "isLogged",
  initialState: {
    value: {
      isLogged: false,
      token: "",
      message: ""
    }
  },
  reducers: {
    setIsLogged: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setIsLogged } = isLoggedSliced.actions;
export default isLoggedSliced.reducer;
