import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../feature/recipes/recipesSlice";

export default configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
