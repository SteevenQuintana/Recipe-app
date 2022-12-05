import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { menuItems } from "../helpers/menuItems";
import { MenuItem } from "../interfaces/menu";

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: menuItems,
  reducers: {
    setActive: (state, action: PayloadAction<MenuItem>) => {
      const index = state.findIndex((state) => state.active);
      state[index].active = false;
      state[action.payload.id].active = true;
      return state;
    },
  },
});

export const { setActive } = recipeSlice.actions;

export default recipeSlice.reducer;
