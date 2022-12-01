import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Recipes from "../../container/Recipes/Recipes";
import { menuItems } from "../../helpers/menuItems";
import { Banner } from "./Banner";
import { Logo } from "./Logo";
import "./styles/Navbar.scss";
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
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
              >
                <h3 className="navbar-title">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>

        <Banner />

        <div className={"navbar__menu-mobile"}>
          {menuItems.map((item, index) => (
            <Link key={`mobile-${index}`} className={item.cName} to={item.url}>
              <img className="link-img" src={item.icon} alt={item.title} />
              <h3 className="title">{item.titleMobile}</h3>
            </Link>
          ))}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Recipes query="" />} />
        <Route path="/vegetarianos" element={<Recipes query="vegetarian" />} />
        <Route
          path="/platos-principales"
          element={<Recipes query="main course" />}
        />
        <Route path="/Tortas" element={<Recipes query="dessert" />} />
        <Route path="/comida-rapida" element={<Recipes query="fingerfood" />} />
        <Route path="/menu-ninos" element={<Recipes query="snack" />} />
        <Route path="/sopas" element={<Recipes query="soup" />} />
      </Routes>
    </>
  );
};

export default Navbar;
