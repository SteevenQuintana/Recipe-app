import { useEffect, useState } from "react";
import { Recipe } from "../../interfaces/recipe";

interface query {
  query: string;
}

function Recipes({ query }: query) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    // const baseUrl = `${process.env.REACT_APP_URL}recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4&tags=${query}&sort=popularity`;
    // fetch(baseUrl)
    //   .then((response) => response.json())
    //   .then((data) => setRecipes(data.recipes));
  }, []);
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
