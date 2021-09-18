import React, { useContext } from "react";

import { CoinContext } from "../../Helpers/Context";

import "./Header.css";

const Header = () => {
  const { Filterfunction } = useContext(CoinContext);
  return (
    <div className="header">
      <h1 className="header__title">
        {" "}
        <i className="fas fa-archway"></i>
        <span>Coin Mee</span>
      </h1>

      <input
        type="text"
        className="header__input"
        placeholder="Search..."
        onChange={(e) => Filterfunction(e.target.value)}
        tabIndex="1"
      />
    </div>
  );
};

export default Header;
