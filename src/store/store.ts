import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import jobsReducer from "./jobSlice"
import applicationReducer from "./applicationSlice"
import userReducer from "./userSlice";  
//import { loadState } from "./preloadedState";


//const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobsReducer,
    applications: applicationReducer,
    users: userReducer, 
  },
   //preloadedState,
});

// store.subscribe(() => {
//   localStorage.setItem(
//     "reduxState",
//     JSON.stringify(store.getState())
//   );
// });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 