import React, { useState } from "react";
import MenuButton from "../../components/MenuButton";
import "./Menu.css";

const Menu = (active) => {
  const [menuOpen, setMenuOpen] = useState(false);

  toggleMenu = () => {
    // let clickContainer = document.querySelectorAll("#click-container")
    if (!menuOpen) {
      setMenuOpen(true);
      window.addEventListener("mouseup", () => this.checkWindowClick());
      // this.windowClick()
      // clickContainer.addEventListener("click", () => this.toggleMenu())
    } else {
      var menu = document.getElementById("myDropdown");
      // var menuButton = document.querySelector(".menu-container")
      menu.classList.add("slide-out");
      // menuButton.classList.add("change")
      setTimeout(() => {
        menu.classList.remove("slide-out");
        // menuButton.classList.remove("change")
        setMenuOpen(true);
      }, 500);
      // window.removeEventListener("mouseup", )
      // clickContainer.removeEventListener("click", () => this.toggleMenu())
    }
  };

  checkWindowClick = () => {
    // var menu = document.getElementById("myDropdown")
  };

  return (
    <div className="menu fullscreen">
      <div
        className={`menu-container ${menuOpen ? "change" : ""}`}
        onClick={() => this.toggleMenu()}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div
        id="myDropdown"
        className={`dropdown-content ${menuOpen ? "show" : "no-show"}`}
      >
        <MenuButton
          menuItem="Home"
          active={active}
          toggleMenu={() => this.toggleMenu()}
        />
        {/* <MenuButton menuItem="Company" active={active}/>
          <MenuButton menuItem="Services" active={active}/> */}
        <MenuButton
          menuItem="Contact"
          active={active}
          toggleMenu={() => this.toggleMenu()}
        />
      </div>
    </div>
  );
};

export default Menu;