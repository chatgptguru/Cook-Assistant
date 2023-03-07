import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],

};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      return { recipes: action.payload };
    }
    
  },
});

export const searchReducer = searchSlice.reducer;
export const { setRecipes} = searchSlice.actions;
// export default reducer;
