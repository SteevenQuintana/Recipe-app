import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    value: "",
  },
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setQuery } = recipeSlice.actions;

export default recipeSlice.reducer;
