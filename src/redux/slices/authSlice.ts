import { createSlice } from "@reduxjs/toolkit";
import { login, fetchProtectedData } from "../thunks/authThunks";

interface AuthState {
  token: string | null;
  role: string | null;
  protectedData: any;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  role: null,
  protectedData: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.protectedData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.role = action.payload.role;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchProtectedData.fulfilled, (state, action) => {
        state.protectedData = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
