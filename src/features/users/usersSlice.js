import { createSlice } from "@reduxjs/toolkit";

const initialState = 
  [
    { 
      name: "Andy",
      ektp: "12345678910", 
      addr: "Jl. Taman Raya No.1", 
      job: "Karyawan", 
      birthdate: "2023-01-20", 
      phone: ["0812314678", "0217234997"], 
      family: [
        {
          name: "John",
          birthdate: "2023-01-20",
          relation: "Brother"
        },
        {
            name: "Carla",
            birthdate: "2023-01-20",
            relation: "Sister"
          }
      ]
    },
    { 
      name: "Jane",
      ektp: "12345678910", 
      addr: "Jl. Taman Raya No.2", 
      job: "Karyawan", 
      birthdate: "2023-01-20", 
      phone: ["0812314678"],
      family: [
        {
          name: "Nate",
          birthdate: "2023-01-20",
          relation: "Brother"
        },
        {
            name: "Natalia",
            birthdate: "2023-01-20",
            relation: "Sister"
        },
        {
            name: "Karin",
            birthdate: "2023-01-20",
            relation: "Child"
        }
      ]
    }
  ]

  const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userAdded(state, action) {
            state.push(action.payload);
          },
    },
  });

  export const { userAdded } = usersSlice.actions;
  
  export default usersSlice.reducer;