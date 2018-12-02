import React, { Fragment } from "react";
import HeaderTop from "./Top";
import HeaderMain from "./Main";
import Menu from "../Menu";

const Header = () => {
  return (
    <Fragment>
      <HeaderTop />
      <HeaderMain />
      <Menu />
    </Fragment>
  );
};

export default Header;
