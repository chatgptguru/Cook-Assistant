import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const instructionsSlice = createSlice({
  name: "instructions",
  initialState,
  reducers: {
    setInstructions: (state, action) => {
      return { instructions: action.payload };
    },
    
  },
});

export const instructionsReducer = instructionsSlice.reducer;
export const { setInstructions} = instructionsSlice.actions;
// export default reducer;
