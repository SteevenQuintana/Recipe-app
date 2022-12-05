import { Navbar } from "../../components";
import { Recipes } from "../../container";
import { Route, Routes } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar />
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
}

export default Header;
