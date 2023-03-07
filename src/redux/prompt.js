import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 
};

const promptSlice = createSlice({
  name: "prompt",
  initialState,
  reducers: {
    setPrompt: (state, action) => {
      return { prompt: action.payload };
    },
    
  },
});

export const promptReducer = promptSlice.reducer;
export const { setPrompt} = promptSlice.actions;
// export default reducer;
