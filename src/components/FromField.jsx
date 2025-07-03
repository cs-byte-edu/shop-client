const FormField = ({
  name,
  type = "text",
  placeholder,
  value,
  error,
  touched,
  onChange,
  onBlur,
  disabled,
}) => (
  <div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      className={`border h-12 px-3 rounded w-full transition-colors ${
        error && touched
          ? "border-red-500 focus:border-red-600"
          : "border-green-500 focus:border-green-600"
      }`}
    />
    {error && touched && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default FormField;
