import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipeCard:""
};

const recipeCardSlice = createSlice({
  name: "recipeCard",
  initialState,
  reducers: {
    setRecipeCard: (state, action) => {
      return { recipeCard: action.payload };
    }
  },
});

export const recipeCardReducer = recipeCardSlice.reducer;
export const { setRecipeCard} =recipeCardSlice.actions;
// export default reducer;
