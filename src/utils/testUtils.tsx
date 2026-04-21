import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppDataLoader from "./appDataLoader";
import authReducer from "../store/authSlice";
import jobsReducer from "../store/jobSlice";
import applicationsReducer from "../store/applicationSlice";
import usersReducer from "../store/userSlice";  

function render (ui: React.ReactElement, {
  preloadedState = undefined,
  store = configureStore({
    reducer: {
      auth: authReducer,
      jobs: jobsReducer,
      applications: applicationsReducer,
      users: usersReducer
    } as const,
    preloadedState: preloadedState
  }),
  ...renderOptions
}: {
  preloadedState?: any;
  store?: ReturnType<typeof configureStore>;
  [key: string]: any;
} = {}) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <AppDataLoader>
          {children}
        </AppDataLoader>
        </BrowserRouter>
      </Provider>
    );
  }   
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });     
}


export * from "@testing-library/react";

export { render };