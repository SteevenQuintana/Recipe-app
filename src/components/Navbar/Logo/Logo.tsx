import React from "react";
import "./styles/Logo.scss";

const Logo: React.FC = () => {
  return (
    <h1 className="logo">
      <span className="logo-recipe text-monster">Recipe</span>
      <span className="logo-app">App</span>
    </h1>
  );
};

export default Logo;
