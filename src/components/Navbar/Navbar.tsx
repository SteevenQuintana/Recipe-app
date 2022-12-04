import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Recipes } from "../../container";
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
          <Link className="navbar__logo" to="/">
            <Logo />
          </Link>
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

      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/vegetarianos" element={<Recipes />} />
        <Route path="/platos-principales" element={<Recipes />} />
        <Route path="/Tortas" element={<Recipes />} />
        <Route path="/comida-rapida" element={<Recipes />} />
        <Route path="/menu-ninos" element={<Recipes />} />
        <Route path="/sopas" element={<Recipes />} />
      </Routes>
    </>
  );
};

export default Navbar;
