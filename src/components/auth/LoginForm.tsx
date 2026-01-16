import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginSuccess } from "../../store/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // mock login (API later)
    dispatch(
      loginSuccess({
        id: "1",
        name: "John Doe",
        email: "john@example.com",
      })
    );

    navigate("/profile");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow space-y-5 pt-20"
    >
      <h1 className="text-2xl font-bold text-center">Login</h1>

      <input
        type="email"
        required
        placeholder="Email"
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="password"
        required
        placeholder="Password"
        className="w-full border p-3 rounded-lg mb-2"
      />

      <h3 className="pl-60 cursor-pointer">Forgot password?</h3>

      <button
        type="submit"
        className="w-full !bg-blue-600 text-white py-3 rounded-lg !hover:bg-blue-700"
      >
        Login
      </button>

      <h3 className="text-center mt-10 mb-0 text-xl">dont have an account? <Link to="/signup"
      className="font-normal
       ">SIGN UP </Link></h3>
      

      <h3 className="text-center mt-30 mb-0 text-xl">or sign up using</h3>
      <div className="flex gap-6 items-center justify-center">
        <div className="w-8 h-8 bg-blue-500 text-white rounded-full px-2 py-1">Fb</div>
        <div className="w-8 h-8 bg-blue-500 text-white rounded-full px-2 py-1">Tw</div>
        <div className="w-8 h-8 bg-blue-500 text-white rounded-full px-2 py-1">G</div>
      </div>

      
    </form>
  );
};

export default LoginForm;