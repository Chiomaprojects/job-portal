export type UserRole = "admin" | "visitor";

export interface User {
  id: string;
  name: string; 
  email: string;
  role: UserRole;
}