const InputField = ({
  type = "text",
  label,
  value,
  name,
  error = "",
  required = false,
  ...rest
}) => {
  return (
    <span className="flex flex-col mb-5">
      <label className="uppercase text-sm font-semibold mb-2.5" htmlFor={name}>
        {required && "*"}
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={label}
        className={`placeholder:text-gray-800 text-sm ${
          type !== "file" ? "bg-gray-200 py-2.5 pl-4 pr-8.25" : ""
        }`}
        value={value}
        {...rest}
      />
      <p className="text-red-700">{error && error}</p>
    </span>
  );
};

export default InputField;
