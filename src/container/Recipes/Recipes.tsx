import { useEffect, useState } from "react";
import { Recipe } from "../../interfaces/recipe";
import getRecipes from "../../services/recipe.service";
import { useAppSelector } from "../../app/hooks";

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const recipe = useAppSelector((state) => state.recipe.value);

  useEffect(() => {
    (async () => {
      setRecipes(await getRecipes(recipe));
    })();
  }, [recipe]);

  return (
    <>
      <ul>
        {recipes.map((recipe: Recipe) => (
          <li key={recipe.id}>
            <img src={recipe.image} alt="" />
            <div>
              <h4>Tamaño de la porción</h4>
              <h5>{recipe.servings}</h5>
            </div>
            <div>
              <h4>Tiempo de preparación</h4>
              <h5>{recipe.servings}</h5>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Recipes;
