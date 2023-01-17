import { useField } from "formik";

function CustomTextarea({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="flex items-start relative flex-wrap">
      <label
        htmlFor={props.id || props.name}
        className="flex items-center w-28 h-12 flex-shrink-0"
      >
        {label}
      </label>
      <textarea
        autoComplete="off"
        className="textarea textarea-bordered w-full max-w-xs"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <label className="label w-full pl-[112px]">
          <span className="label-text-alt text-red-500">{meta.error}</span>
        </label>
      ) : null}
    </div>
  );
}
export default CustomTextarea;
