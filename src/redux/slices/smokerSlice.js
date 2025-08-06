import { createSlice } from "@reduxjs/toolkit";

// Create initialState, an empty array
const initialState = {
  smoker: [],
};

/*
 Example of data
 [
 { 
    name: "Federus", 
    age: "20", 
    gender: "male", 
    smoker: "y", 
    brands: (2) […], 
    otherBrands: "Kapal Sakti" 
  }
  ]
*/

const smokerSlice = createSlice({
  initialState,

  // Create a reducer function
  reducers: {
    // Add data function
    addData: (state, { payload }) => {
      // Find index of the same name
      const index = state.smoker.findIndex((el) => {
        return el.name === payload.formData.name;
      });

      // If cannot find the same name, findIndex will return -1
      // Push the data to smoker
      if (index === -1) {
        state.smoker.push(payload.formData);
      }
    },

    // Remove data function
    removeData: (state, { payload }) => {
      // Find index of the name we want to delete
      const index = state.smoker.findIndex((el) => {
        // Return index of smoker name we want to find
        return el.name === payload.name;
      });

      // Remove the index of the name we want to remove
      state.smoker.splice(index, 1);
    },
  },

  // Slice name
  name: "smoker",
});

// Export action
export const { addData, removeData } = smokerSlice.actions;

// Export reducer
export default smokerSlice.reducer;
