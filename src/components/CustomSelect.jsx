import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex items-start relative flex-wrap">
      {label && (
        <label className="flex items-center w-28 h-12 flex-shrink-0">
          {label}
        </label>
      )}
      <select
        autoComplete="off"
        {...field}
        {...props}
        className={`select select-bordered w-full max-w-xs ${
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
export default CustomSelect;
