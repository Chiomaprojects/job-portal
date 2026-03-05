import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { User } from "../types/user.types";  
import { loginUser, registerUser } from "../api/authApi";


interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error:null,
};

export const login = createAsyncThunk<User, { email: string; password: string }, { rejectValue:string }>(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
try {
  const resp = await loginUser({ email, password }); // LoginResponse
  return {
    id: resp.id,
    name: resp.name,
    role: resp.role === "admin" ? "admin" : "visitor",
    email: resp.email,
    };
 } catch (err) {
  if (err && typeof err === 'object' && 'response' in err) {
    return thunkAPI.rejectWithValue((err as any).response?.data?.errors);
  }
   return thunkAPI.rejectWithValue('An unexpected error occurred');
 }
   });

export const register = createAsyncThunk<User, { name: string; email: string; password: string }, { rejectValue: string }>(
  "auth/register",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await registerUser({
        name, email, password,
        confirmPassword: ""
      });
      return {
        id: response.id,
        name: response.name,
        role: response.role || "visitor", // Default if missing
        email: response.email,
      };
    } catch (err) { 
      const error = err as any;
      return thunkAPI.rejectWithValue(error.response?.data?.errors);
    }   
  }
);    

const authSlice = createSlice({
  name: "auth",  
  initialState,   
  reducers: { 
    logout(state) {
      state.user = null;
    },
  },    
  extraReducers: (builder) => {
    builder
    .addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    })    
    .addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string; 
    })    
    .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
    })    
    .addCase(register.pending, (state) => {
      state.loading = true;
      state.error = null;
    })    
    .addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string; 
    })  
    .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
    });     
  },
});       

export const { logout } = authSlice.actions;
export default authSlice.reducer;   

