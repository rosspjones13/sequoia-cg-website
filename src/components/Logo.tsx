import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="home">
      <div className="logo-container">
        <img id="logo-tree" src="/images/TreeGreen-small.png" alt="Logo Tree" />
        <div className="logo-name">
          <img
            id="logo-sequoia"
            src="/images/SequoiaGold-small.png"
            alt="Logo Sequoia"
          />
          <img
            id="logo-cg"
            src="/images/ConsultingGroupGreen-small.png"
            alt="Logo Consulting Group"
          />
        </div>
      </div>
    </Link>
  );
};

export default Logo;
