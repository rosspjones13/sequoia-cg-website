import React from "react";
import Logo from "../../components/Logo";
import Menu from "../Menu/Menu";
import "./TitleBar.scss";

const TitleBar = (active) => {
  return (
    <div className="titlebar">
      <Logo />
      <Menu active={active} />
    </div>
  );
};

export default TitleBar;
