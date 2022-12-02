import React from "react";
import "./Banner.scss";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner__text">
        <span className="banner-title">Recetas</span>
        <span className="banner-subtitle text-monster">para todos</span>
      </div>
    </div>
  );
};

export default Banner;
