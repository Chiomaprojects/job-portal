import type { InputHTMLAttributes } from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ label, error, ...rest }: InputProps) => {
return(
  <div>
    {label && <label className="font-medium text-gray-700">{label}</label>}
    <input
    className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
      ${error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"}`}
      {...rest}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);
};

export default Input;