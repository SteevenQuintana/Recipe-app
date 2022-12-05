import React from "react";
import "./SpecificationItem.scss";
export interface SpecificationItemInterface {
  image: string;
  title: string;
  subtitle: string | number;
}

const SpecificationItem: React.FC<SpecificationItemInterface> = ({
  image,
  title,
  subtitle,
}) => {
  return (
    <div className="specification">
      <img
        className="specification__img"
        src={image}
        alt="preparation portions"
      />
      <h4 className="specification__title text-monster">{title}</h4>
      <h5 className="specification__subtitle">{subtitle}</h5>
    </div>
  );
};

export default SpecificationItem;
