import React from "react";
import star from "../../assets/icons/ic_star.svg";
import like from "../../assets/icons/ic-favorite.svg";
import { UIhelper } from "../../helpers/UI";
import { DescriptionInterface } from "../../interfaces/app";
import "./Description.scss";

const Description: React.FC<DescriptionInterface> = ({ title }) => {
  return (
    <div className="description">
      <h3 className="item-title">
        {UIhelper.shortenText(title)[0]}{" "}
        <span className="text-monster item-subtitle">
          {UIhelper.shortenText(title)[1]}
        </span>
      </h3>
      <div className="item-qualification">
        <div className="item-qualification__star">
          <img src={star} alt="qualification" />
          <span>{UIhelper.recipeRating()}</span>
        </div>
        <img
          className="item-qualification__like"
          src={like}
          alt="add to favorite"
        />
      </div>
    </div>
  );
};

export default Description;
