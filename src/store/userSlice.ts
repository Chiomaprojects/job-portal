   import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
   import type { User } from "../types/user.types";
   import { getUsers, createUser, removeUser, editUser, getUserByEmail } from "../api/usersApi";  

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}   

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};    


export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async() => {
    return await getUsers();
  }
);  

export const addUser = createAsyncThunk(
  "users/addUser",
  async (user: User) => {
    return await createUser(user);
  }
);    

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId: string, thunkAPI) => {   
    try {
      return await removeUser(userId);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    } 
  }
);    

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (user: User, thunkAPI) => { 
    try {
      return await editUser(user);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }   
  }
);    

export const fetchUserByEmail = createAsyncThunk(
  "users/fetchUserByEmail",
  async (email: string, thunkAPI) => {    
    try {
      return await getUserByEmail(email);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    } 
  }
);    


const userSlice = createSlice({
  name: "users",
  initialState,   
  reducers: {},
  extraReducers: (builder) => {
    builder   
    .addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch users";
    })
    .addCase(addUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    })
    .addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to add user";
    })
    .addCase(deleteUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      const userIdToDelete = action.payload; // action.payload is the userId string
      state.users = state.users.filter(user => user.id !== userIdToDelete);
    })
    .addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to delete user";
    })
    .addCase(updateUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      const updatedUserIndex = state.users.findIndex(user => user.id === action.payload.id);
      if (updatedUserIndex !== -1) {
        state.users[updatedUserIndex] = action.payload; // Update the user in the array
      }
    })
  .addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to update user";
  })        
    .addCase(fetchUserByEmail.pending, (state) => {
      state.loading = true;
      state.error = null;
    })  
    .addCase(fetchUserByEmail.fulfilled, (state, action) => {
      state.loading = false;
      const user = action.payload;    
      if (user) {
        const existingUserIndex = state.users.findIndex(u => u.id === user.id);   
        if (existingUserIndex !== -1) {
          state.users[existingUserIndex] = user; // Update existing user
        } else {
          state.users.push(user); // Add new user if not found
        }   
      }
    })
    .addCase(fetchUserByEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch user by email";
    });     
  },
});     

export default userSlice.reducer;     
