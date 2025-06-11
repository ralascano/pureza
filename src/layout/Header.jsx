import React from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../../public/data.json";
import logo from "../assets/path1.png";

const Header = () => {
  const navigate = useNavigate();

  // Agrupar productos por categoría (si no hay, asumimos una por defecto)
  const productosPorCategoria = data.reduce((acc, prod) => {
    const categoria = prod.categoria || "Sin categoría";
    if (!acc[categoria]) acc[categoria] = [];
    acc[categoria].push(prod);
    return acc;
  }, {});

  const handleSelect = (e) => {
    const selectedId = e.target.value;
    if (selectedId) navigate(`/${selectedId}`);
  };

  return (
    <header className="header-style">
      <Link className="logo-style" to="/">
        <img className="image-logo-style" src={logo} alt="Logo" />
      </Link>

      <select className="dropdown-style" onChange={handleSelect}>
        <option value="">-- Elige un producto --</option>
        {Object.entries(productosPorCategoria).map(([cat, productos]) => (
          <optgroup label={cat} key={cat}>
            {productos.map((prod) => (
              <option key={prod.id} value={prod.id}>
                {prod.nombre}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </header>
  );
};

export default Header;
