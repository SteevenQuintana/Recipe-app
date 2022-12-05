import home from "../assets/icons/ic_home.svg";
import vegetarian from "../assets/icons/ic_vegetarian.svg";
import main from "../assets/icons/ic_main.svg";
import cake from "../assets/icons/ic_cake.svg";
import fastFood from "../assets/icons/ic_fast-food.svg";
import kids from "../assets/icons/ic_kids.svg";
import soup from "../assets/icons/ic_soup.svg";
import { MenuItem } from "../interfaces/menu";

export const menuItems: MenuItem[] = [
  {
    id: 0,
    title: "Home",
    titleMobile: "Home",
    active: true,
    url: "/",
    query: "",
    icon: home,
    cName: "navbar-link-mobile",
  },
  {
    id: 1,
    title: "Vegetarianos",
    titleMobile: "Vegetarianos",
    active: false,
    url: "/vegetarianos",
    query: "vegetarian",
    icon: vegetarian,
    cName: "navbar-link",
  },
  {
    id: 2,
    title: "Platos principales",
    titleMobile: "principales",
    active: false,
    url: "/platos-principales",
    query: "main course",
    icon: main,
    cName: "navbar-link",
  },
  {
    id: 3,
    title: "Tortas",
    titleMobile: "Tortas",
    active: false,
    url: "/tortas",
    query: "dessert",
    icon: cake,
    cName: "navbar-link",
  },
  {
    id: 4,
    title: "Comida Rápida",
    titleMobile: "Rápida",
    active: false,
    url: "/comida-rapida",
    query: "fingerfood",
    icon: fastFood,
    cName: "navbar-link",
  },
  {
    id: 5,
    title: "Menú Niños",
    titleMobile: "Menú Niños",
    active: false,
    url: "/menu-ninos",
    query: "snack",
    icon: kids,
    cName: "navbar-link",
  },
  {
    id: 6,
    title: "Sopas",
    titleMobile: "Sopas",
    active: false,
    url: "/sopas",
    query: "soup",
    icon: soup,
    cName: "navbar-link",
  },
];
