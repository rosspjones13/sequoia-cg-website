import React from "react";
import Logo from "../../components/Logo";
import Menu from "../Menu/Menu";
import "./TitleBar.css";

const TitleBar = () => {
  const { active } = this.props;
  return (
    <div className="titlebar">
      <Logo />
      <Menu active={active} />
    </div>
  );
};

export default TitleBar;
