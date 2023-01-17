import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const users = useSelector((state) => state.users);

  const [family, setFamily] = useState();

  return (
    <>
      <div className="mt-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">List Users</h1>
          <Link
            to={`/form`}
            className="btn bg-[#ff3333] border-0 tracking-wide"
          >
            Create New User
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>eKTP</th>
                <th>Address</th>
                <th>Job</th>
                <th>Date of Birth</th>
                <th>Phone Number</th>
                <th>Family</th>
              </tr>
            </thead>
            <tbody>
              {users.map(
                ({ name, ektp, addr, job, birthdate, phone, family }, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{name}</td>
                    <td>{ektp}</td>
                    <td>{addr}</td>
                    <td>{job}</td>
                    <td>{birthdate}</td>
                    <td>
                      {phone?.map((data, i) => (
                        <React.Fragment key={i + data}>
                          {data.number && (
                            <span className="block">{data.number}</span>
                          )}
                        </React.Fragment>
                      ))}
                    </td>
                    <td>
                      {family[0].name && family.length !== 0 ? (
                        <label
                          htmlFor="my-modal-4"
                          className="btn bg-[#ff3333] border-0"
                          onClick={() => setFamily(family)}
                        >
                          Show
                        </label>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL POPUP */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Birthdate</th>
                  <th>Relation</th>
                </tr>
              </thead>
              <tbody>
                {family?.map(({ name, birthdate, relation }, i) => (
                  <tr key={i}>
                    <td>{name}</td>
                    <td>{birthdate}</td>
                    <td>{relation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </label>
      </label>
    </>
  );
}
export default Home;
