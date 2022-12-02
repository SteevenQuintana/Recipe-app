import React from "react";
import "./Logo.scss";

const Logo: React.FC = () => {
  return (
    <h1 className="logo">
      <span className="logo-title text-monster">Recipe</span>
      <span className="logo-subtitle">App</span>
    </h1>
  );
};

export default Logo;
