import { useEffect, useState } from "react";
import { Recipe } from "../../interfaces/recipe";
import getRecipes from "../../services/recipe.service";
import { useAppSelector } from "../../app/hooks";
import "./Recipes.scss";
import { Description, Specification } from "../../components";
import { UIhelper } from "../../helpers/UI";

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const menus = useAppSelector((state) => state.recipe);
  const index = menus.findIndex((recipe) => recipe.active === true);
  const query = menus[index].query;

  useEffect(() => {
    (async () => {
      setRecipes(await getRecipes(query));
    })();
  }, [menus]);

  return (
    <div className="recipe">
      <h2 className="recipe__title text-monster">
        {UIhelper.recipeName(menus[index].title)}
      </h2>
      <ul className="recipe__list">
        {recipes.map((recipe: Recipe) => (
          <li key={recipe.id}>
            <div className="item-container">
              <div className="item-image">
                <img className="image" src={recipe.image} alt="" />
              </div>
              <div className="item-details">
                <section className="item-description">
                  <Description title={recipe.title} />
                </section>

                <section className="item-specifications">
                  <Specification
                    servings={recipe.servings}
                    minutes={recipe.readyInMinutes}
                    ingredients={recipe.extendedIngredients.length}
                  />
                </section>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
