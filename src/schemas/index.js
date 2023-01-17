import * as yup from "yup";

export const advancedSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters long")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
    .required("Required"),
  ektp: yup.number().positive().min(5).integer().required("Required"),
  dob: yup.date().required(),
});
