import { useDispatch } from "react-redux";
import { userAdded } from "../features/users/usersSlice";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { advancedSchema } from "../schemas";

import CustomInput from "../components/CustomInput";
import CustomSelect from "../components/CustomSelect";
import CustomTextarea from "../components/CustomTextarea";

function AddUser() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const { name, addr, ektp, job, dob: birthdate } = values;

    dispatch(
      userAdded({
        name,
        ektp,
        addr,
        job,
        birthdate,
      })
    );

    actions.resetForm();
    navigate("/");
  };

  const [addphone, setAddphone] = useState(1);
  const handleAddPhone = (e) => {
    e.preventDefault();
    if (addphone < 3) {
      setAddphone(addphone + 1);
    }
  };

  const [addfamily, setFamily] = useState(1);
  const handleAddFamily = (e) => {
    e.preventDefault();
    if (addfamily < 5) {
      setFamily(addfamily + 1);
    }
  };

  return (
    <div className="mt-16">
      <Formik
        initialValues={{ name: "", job: "", ektp: "", addr: "", dob: "" }}
        // validationSchema={advancedSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <h2 className="text-xl font-bold mb-4">Create New User</h2>
            <div className="grid grid-cols-2 gap-8 items-start">
              <div className="grid gap-3">
                <CustomInput
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Enter your username"
                />
                <CustomTextarea
                  label="Address"
                  name="addr"
                  type="textarea"
                  placeholder="Enter your Address"
                />
                <CustomInput
                  label="eKTP"
                  name="ektp"
                  type="number"
                  placeholder="Enter your eKTP Number"
                />
                <CustomSelect
                  label="Job Type"
                  name="job"
                  placeholder="Please select a job"
                >
                  <option value="">Please select a job type</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="manager">Product Manager</option>
                  <option value="other">Other</option>
                </CustomSelect>
                <CustomInput
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  placeholder="Enter your birthdate"
                />
              </div>
              <div className="flex flex-col gap-3">
                {Array.from({ length: addphone }, (_, i) => {
                  return (
                    <CustomInput
                      key={i}
                      label="Phone"
                      name={`phone-${i}`}
                      type="text"
                      placeholder="Enter your phone number"
                    />
                  );
                })}
                {addphone < 3 && (
                  <button
                    className="btn btn-sm max-w-fit px-8 border-0"
                    onClick={handleAddPhone}
                  >
                    Add Phone
                  </button>
                )}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-bold mb-4">
                Family Member ({addfamily})
              </h2>
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Relationship Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: addfamily }, (_, i) => {
                    return (
                      <tr key={i}>
                        <td>
                          <CustomInput
                            label=""
                            name={`familyname-${i}`}
                            type="text"
                            placeholder="Enter your Family Name"
                          />
                        </td>
                        <td>
                          <CustomInput
                            name={`familydob-${i}`}
                            type="date"
                            placeholder="Enter your birthdate"
                          />
                        </td>
                        <td>
                          <CustomSelect
                            label=""
                            name={`relation-${i}`}
                            placeholder="Please select a relation"
                          >
                            <option value="">Relationship Status</option>
                            <option value="brother">Brother</option>
                            <option value="sister">Sister</option>
                            <option value="parent">Parent</option>
                            <option value="child">Child</option>
                          </CustomSelect>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {addfamily < 5 && (
                <button
                  className="btn border-0 btn-sm"
                  onClick={handleAddFamily}
                >
                  Add Family Member
                </button>
              )}
            </div>
            <div className="flex items-center mt-16 gap-8">
              <button
                type="reset"
                className="btn bg-[#f3f3f3] text-[#2e2e2e] border-0 min-w-[150px] hover:text-white"
              >
                Cancel
              </button>
              <button
                disabled={isSubmitting}
                className="btn min-w-[200px] bg-[#ff3333] border-0"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default AddUser;
