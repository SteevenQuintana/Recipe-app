import React from "react";
import { UIhelper } from "../../helpers/UI";
import portion from "../../assets/icons/portion.svg";
import time from "../../assets/icons/time.svg";
import difficulty from "../../assets/icons/chef.svg";
import SpecificationItem from "../SpecificationItem/SpecificationItem";
import { specificationInterface } from "../../interfaces/app";

const Specification: React.FC<specificationInterface> = ({
  servings,
  minutes,
  ingredients,
}) => {
  return (
    <div className="specification-container">
      <SpecificationItem
        image={portion}
        title="Tamaño de la porción"
        subtitle={servings + " raciones"}
      />
      <SpecificationItem
        image={time}
        title="Tiempo de preparación"
        subtitle={UIhelper.recipeReady(minutes)}
      />
      <SpecificationItem
        image={difficulty}
        title="Dificultad"
        subtitle={UIhelper.recipeDifficulty(ingredients)}
      />
    </div>
  );
};

export default Specification;
