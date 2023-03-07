import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    setIngredients: (state, action) => {
      return { ingredients: action.payload };
    },
    
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
export const { setIngredients} = ingredientsSlice.actions;
// export default reducer;
