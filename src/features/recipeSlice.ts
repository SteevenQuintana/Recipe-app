import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    value: "",
  },
  reducers: {
    setQuery: (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});

export const { setQuery } = recipeSlice.actions;

export default recipeSlice.reducer;
