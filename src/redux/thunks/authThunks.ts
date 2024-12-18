import { createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { saveToken } from "../../utils/tokenUtils";
import { api } from "../../service/apiService";

interface LoginPayload {
  username: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }: LoginPayload, thunkAPI) => {
    try {
      const response = await api.post(
        `/token?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
      );

      const token = response.data.access_token;
      const decoded: { sub: string } = jwtDecode(token);

      if (!decoded?.sub) throw new Error("Token inválido");

      saveToken(token);
      return { token, role: decoded.sub };
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Falha na autenticação");
    }
  }
);

export const fetchProtectedData = createAsyncThunk(
  "auth/fetchProtectedData",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as any;
      const role = state.auth.role;

      const route = role === "admin" ? "/admin" : "/user";

      const response = await api.get(route);

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Erro ao acessar rota protegida");
    }
  }
);
