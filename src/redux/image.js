import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImage: (state, action) => {
      return { image: action.payload };
    },
  },
});

export const imageReducer = imageSlice.reducer;
export const { setImage} = imageSlice.actions;
// export default reducer;
