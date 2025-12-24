
interface SelectProps {
  label?: string;
  options: {value: string, label: string}[];
  error?: string;
  [key: string]: any;
}

const Select = ({ label, options, error, ...rest }: SelectProps) => {
  return(
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="font-medium text-gray-700">{label}</label>}
      <select className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
        ${error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"}`}
        {...rest}>
        <option value = "">Select option</option>
        {options.map((opt)=>(
          <option
          key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Select;