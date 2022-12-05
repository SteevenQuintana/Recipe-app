import React from "react";
import { Link } from "react-router-dom";
import { Banner, Logo } from "../../components";
import { setActive } from "../../features/recipeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const menu = useAppSelector((state) => state.recipe);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Logo />
          <div className={"navbar__menu-desktop"}>
            {menu.map((item, index) => (
              <Link
                key={`mobile-${index}`}
                className={`navbar-link-desktop ${item.active && "active"}`}
                to={item.url}
                onClick={() => dispatch(setActive(item))}
              >
                <h3 className="navbar-title">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
        <Banner />
        <div className={"navbar__menu-mobile"}>
          {menu.map((item, index) => (
            <Link
              key={`mobile-${index}`}
              className={item.cName}
              to={item.url}
              onClick={() => dispatch(setActive(item))}
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
