import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../feature/recipes/recipesSlice";
import Recipe from "./Recipe";
const Recipes = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.recipes.status);
  const recipes = useSelector((state) => state.recipes.recipes);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRecipes());
      console.log(recipes);
    }
  }, [recipes, dispatch, status]);
  return (
    <main className="container pt-3">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xxl-6 gy-3">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
};

export default Recipes;
