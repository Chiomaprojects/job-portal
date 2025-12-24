import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
  isLoading?: boolean;
}

const Button = ({ variant = "primary", isLoading, className, children, ...rest }: ButtonProps) => {

  const baseStyles = 
  "px-4 py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  }

  return(
    <button className={clsx(baseStyles, variants[variant], className)}
    disabled = {isLoading}
    {...rest}>
      {isLoading && <i className="fas fa-spinner fa-spin"></i>}
      {children}
    </button>
  );
};

export default Button;