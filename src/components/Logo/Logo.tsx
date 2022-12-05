import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";

const Logo: React.FC = () => {
  return (
    <Link className="navbar__logo" to="/">
      <h1 className="logo">
        <span className="logo-title text-monster">Recipe</span>
        <span className="logo-subtitle">App</span>
      </h1>
    </Link>
  );
};

export default Logo;
