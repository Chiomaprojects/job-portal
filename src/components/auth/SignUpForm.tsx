import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/authSlice";
import type { AppDispatch } from "../../store/store";


const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //  
    try {
      // wait for thunk and throw if rejected
      await dispatch(register({ username, email, password })).unwrap();
      navigate("/login");
    } catch (err) {
      // err contains server validation details (inspect in console or DevTools)
      console.error("Registration failed:", err);
    } 
  }
       
  return(
    <form 
    onSubmit={handleSubmit}
    className="bg-white shadow p-8 rounded-xl space-y-5">
        <h1 className="text-2xl font-bold text-center">Create Account</h1>
        
        <input
        placeholder="Enter your name"
        type="text"
        required
        className="w-full border p-3 rounded-lg"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        />

        <input
        placeholder="Enter your email"
        type="email"
        required
        className="w-full border p-3 rounded-lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}  
        />

        <input
        placeholder="Create password"
        type="password"
        required
        className="w-full border p-3 rounded-lg"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        />

        <input
        placeholder="Confirm password"
        type="password"
        required
        className="w-full border p-3 rounded-lg"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}  
        />

        <input 
        type="checkbox" 
        required
        id="terms" 
        name="terms_and_conditions" 
        value="accepted"
        className=""
        />
      <label htmlFor="terms">
          <span className="ml-1">I accept all terms and conditions</span>
        </label>

        <button
        type="submit"
        onClick={handleSubmit}
        className="w-full !bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        Register Now
      </button>

      <h3 className="text-center mt-25 mb-0 text-xl">Already have an account? <Link to="/login"
            className="font-normal
             ">Login now </Link></h3>
    </form>
  );
};

export default SignUpForm;