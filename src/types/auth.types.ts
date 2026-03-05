
export interface loginArgs {
  email: string;
  password: string;
} 

export interface register {
  id?: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;  
}   

export interface loginResponse {
  id: string;
  name: string;   
  email: string;
  token: string;
  role: 'admin' | 'visitor';
}     

