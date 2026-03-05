import type { loginArgs, loginResponse, register } from "../types/auth.types";
import type { User } from "../types/user.types";

const AUTH_KEY = "auth";

export const getRegisteredUser = async (): Promise<any | null> => {
  const authData = localStorage.getItem(AUTH_KEY);
  return authData ? JSON.parse(authData) : null;
};

export const logoutUser = async (): Promise<void> => {
  localStorage.removeItem(AUTH_KEY);
};    

export const registerUser = async (userData: register): Promise<User> => {
  const role = userData.email === "admin@example.com" ? "admin" : "visitor";
  const user: User = {
    id: Date.now().toString(),
    name: userData.name,
    role,
    email: userData.email,
  };
  localStorage.setItem(AUTH_KEY, JSON.stringify({ ...user, password: userData.password }));
  return user;
};    

export const loginUser = async (credentials: loginArgs): Promise<loginResponse> => {
  const registeredUser = await getRegisteredUser();
  if (registeredUser && registeredUser.email === credentials.email && registeredUser.password === credentials.password) {
    return {
      id: registeredUser.id,
      name: registeredUser.name,
      email: registeredUser.email,
      token: "fake-token",
      role: registeredUser.role as 'admin' | 'visitor',
    };
  } else {
    throw new Error("Invalid email or password");
  }       
};    





