import { useEffect, useState } from "react";
import { Recipe } from "../../interfaces/recipe";
import getRecipes from "../../services/recipe.service";
import { useAppSelector } from "../../app/hooks";
import star from "../../assets/icons/ic_star.svg";
import like from "../../assets/icons/ic-favorite.svg";
import ojingeo from "../../assets/images/Ojingeo-muchim-5.png";
import { UIhelper } from "../../helpers/UI";
import portion from "../../assets/icons/portion.svg";
import time from "../../assets/icons/time.svg";
import dificulty from "../../assets/icons/chef.svg";
import "./Recipes.scss";

function Recipes() {
  // const [recipes, setRecipes] = useState<Recipe[]>([]);
  // const recipe = useAppSelector((state) => state.recipe.value);

  // useEffect(() => {
  //   (async () => {
  //     setRecipes(await getRecipes(recipe));
  //   })();
  // }, [recipe]);

  const recipes = [
    { id: "1", image: ojingeo, title: "nuevo plato", servings: "10" },
    { id: "2", image: ojingeo, title: "nuevo plato", servings: "10" },
    { id: "3", image: ojingeo, title: "nuevo plato", servings: "10" },
    { id: "4", image: ojingeo, title: "nuevo plato", servings: "10" },
  ];

  return (
    <div className="recipe">
      <h2 className="recipe__title text-monster">Nuevas Recetas</h2>
      <ul className="recipe__list">
        {recipes.map((recipe: any) => (
          <li key={recipe.id}>
            <div className="item-container">
              <div className="item-image">
                <img className="image" src={recipe.image} alt="" />
              </div>
              <div className="item-details">
                <section className="item-description">
                  <h3 className="item-title">
                    {UIhelper.shortenText(recipe.title)[0]}{" "}
                    <span className="text-monster item-subtitle">
                      {UIhelper.shortenText(recipe.title)[1]}
                    </span>
                  </h3>
                  <div className="item-qualification">
                    <div className="item-qualification__star">
                      <img src={star} alt="qualification" />
                      <span>5.0</span>
                    </div>
                    <img
                      className="item-qualification__like"
                      src={like}
                      alt="add to favorite"
                    />
                  </div>
                </section>

                <section className="item-specifications">
                  <div className="specification">
                    <img
                      className="specification__img"
                      src={portion}
                      alt="preparation portions"
                    />
                    <h4 className="specification__title text-monster">
                      Tamaño de la porción
                    </h4>
                    <h5 className="specification__subtitle">
                      {recipe.servings} raciones
                    </h5>
                  </div>
                  <div className="specification">
                    <img
                      className="specification__img"
                      src={time}
                      alt="preparation time"
                    />
                    <h4 className="specification__title text-monster">
                      Tiempo de preparación
                    </h4>
                    <h5 className="specification__subtitle">
                      {recipe.servings * 4} minutos
                    </h5>
                  </div>
                  <div className="specification">
                    <img
                      className="specification__img"
                      src={dificulty}
                      alt="preparation dificulty"
                    />
                    <h4 className="specification__title text-monster">
                      Dificultad
                    </h4>
                    <h5 className="specification__subtitle">fácil</h5>
                  </div>
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
