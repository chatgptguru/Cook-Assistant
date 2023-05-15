import { createSlice } from "@reduxjs/toolkit";
const initialState = {
 
};

const promptTwoSlice = createSlice({
  name: "promptTwo",
  initialState,
  reducers: {
    setpromptTwo: (state, action) => {
      return { promptTwo: action.payload };
    },
    
  },
});

export const promptTwoReducer = promptTwoSlice.reducer;
export const { setpromptTwo} = promptTwoSlice.actions;
// export default reducer;
