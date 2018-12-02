import React, { Fragment } from "react";
import MenuNetwork from "./MenuNetwork";
import MenuBoutique from "./MenuBoutique";

const Menu = () => {
  return (
    <Fragment>
      <MenuNetwork />
      <MenuBoutique />
    </Fragment>
  );
};

export default Menu;
