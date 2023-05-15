import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  prompt:"",
  dish1:"",
  dish2:"",
  dish3:"",
};

const dishSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
   
    setDish1: (state, action) => {
      return { dish1: action.payload };
    },
    setDish2: (state, action) => {
      return { dish2: action.payload };
    },
    setDish3: (state, action) => {
      return { dish3: action.payload };
    },
  },
});

export const dishReducer = dishSlice.reducer;
export const { setDish1,setDish2,setDish3} = dishSlice.actions;
// export default reducer;
