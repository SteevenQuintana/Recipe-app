import React from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../helpers/menuItems";
import { Banner, Logo } from "../../components";
import { setQuery } from "../../features/recipeSlice";
import { useAppDispatch } from "../../app/hooks";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleRecipe = (query: string) => {
    dispatch(setQuery(query));
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Logo />
          <div className={"navbar__menu-desktop"}>
            {menuItems.map((item, index) => (
              <Link
                key={`mobile-${index}`}
                className={`navbar-link-desktop ${item.active && "active"}`}
                to={item.url}
                onClick={() => handleRecipe(item.query)}
              >
                <h3 className="navbar-title">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
        <Banner />
        <div className={"navbar__menu-mobile"}>
          {menuItems.map((item, index) => (
            <Link
              key={`mobile-${index}`}
              className={item.cName}
              to={item.url}
              onClick={() => handleRecipe(item.query)}
            >
              <img className="link-img" src={item.icon} alt={item.title} />
              <h3 className="title">{item.titleMobile}</h3>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
