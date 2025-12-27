import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStateTypes, User } from "@/types/SliceTypes";

const initialState: AuthStateTypes = {
  user: null as User | null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
};

const authenticationSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    //  my logic here for log in and out =>
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
