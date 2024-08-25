const InputField = ({
  type = "text",
  label,
  value,
  name,
  error = "",
  required = true,
  ...rest
}) => {
  return (
    <span className="relative flex flex-col mb-5">
      <label className="uppercase text-sm font-semibold mb-2.5" htmlFor={name}>
        {label}
        <span className="text-red-500 ml-1">{required && "*"}</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={label}
        className={`placeholder:text-gray-800 text-sm ${
          type !== "file" ? "bg-gray-200 py-2.5 pl-4 pr-8.25" : ""
        } ${type !== "file" && error ? "border border-2 border-red-500" : ""}`}
        value={value}
        {...rest}
      />
      <p className="absolute -bottom-4 text-red-500 text-xs font-medium mt-1">
        {error && error}
      </p>
    </span>
  );
};

export default InputField;
