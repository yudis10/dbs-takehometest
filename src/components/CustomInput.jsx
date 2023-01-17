import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex items-start relative flex-wrap">
      {label && (
        <label className="flex items-center w-28 h-12 flex-shrink-0">
          {label}
        </label>
      )}
      <input
        {...field}
        {...props}
        className={`input input-bordered w-full max-w-xs ${
          meta.touched && meta.error ? "input-error" : ""
        }`}
      />

      {meta.touched && meta.error && (
        <label className="label w-full pl-[112px]">
          <span className="label-text-alt text-red-500">{meta.error}</span>
        </label>
      )}
    </div>
  );
};
export default CustomInput;
