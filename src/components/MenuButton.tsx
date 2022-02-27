import { Link } from "react-router-dom";

const MenuButton = ({ menuItem, active, toggleMenu }) => {
  const route = menuItem.toLowerCase();
  return (
    <div
      className={`menu-button ${route === active ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <Link to={`/${route}`}>{menuItem}</Link>
    </div>
  );
};

export default MenuButton;
