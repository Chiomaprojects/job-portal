
import type { User } from "../types/user.types";

const USERS_KEY = "users";

export const getUsers = async (): Promise<User[]> => {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
};  

export const createUser = async (user: User): Promise<User> => {
  const users = await getUsers();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return user;
};

export const removeUser = async (userId: string): Promise<string> => {
  const users = await getUsers();
  const updatedUsers = users.filter((user) => user.id !== userId);
  localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
  return userId;
};      

export const editUser = async (updatedUser: User): Promise<User> => {
  const users = await getUsers();
  const index = users.findIndex((user) => user.id === updatedUser.id);    
  if (index !== -1) {
    users[index] = updatedUser;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
  return updatedUser;
};    

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const users = await getUsers();
  return users.find((user) => user.email === email) || null;
};    

