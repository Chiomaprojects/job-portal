import { Link, useNavigate } from "react-router-dom";


const SignUpForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/login");
  }
    
    
  return(
    <form 
    className="bg-white shadow p-8 rounded-xl space-y-5">
        <h1 className="text-2xl font-bold text-center">Create Account</h1>
        
        <input
        placeholder="Enter your name"
        type="text"
        required
        className="w-full border p-3 rounded-lg"
        />

        <input
        placeholder="Enter your email"
        type="email"
        required
        className="w-full border p-3 rounded-lg"
        />

        <input
        placeholder="Create password"
        type="password"
        required
        className="w-full border p-3 rounded-lg"
        />

        <input
        placeholder="Confirm password"
        type="password"
        required
        className="w-full border p-3 rounded-lg"
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