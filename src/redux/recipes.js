import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  prompt:"",
  recipeTitle: "",
  ingredients: "",
  recipe1:"",
  recipe2:"",
  recipe3:"",
  imageUrl: ""
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      return { recipes: action.payload };
    },
    setRecipe1: (state, action) => {
      return { recipe1: action.payload };
    },
    setRecipe2: (state, action) => {
      return { recipe2: action.payload };
    },
    setRecipe3: (state, action) => {
      return { recipe3: action.payload };
    },
    setPrompt: (state, action) => {
      return { prompt: action.payload };
    },
    setRecipeTitle: (state,action) => {
      state.recipeTitle = action.payload
    },
    setIngredients: (state,action) => {
      state.recipeTitle = action.payload
    },
  },
});

export const recipeReducer = recipeSlice.reducer;
export const { setRecipes, setPrompt, setRecipeTitle, setIngredients, setRecipe1, setRecipe2, setRecipe3} = recipeSlice.actions;
// export default reducer;
