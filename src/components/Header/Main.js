import React from "react";
import { SCWrap } from "../Layout";
import { SCHeaderMain } from "./styles";
import Cart from "./Cart";
import Search from "./Search";

const HeaderMain = () => {
  return (
    <SCHeaderMain>
      <SCWrap>
        <img src="/static/assets/svg/logo.svg" alt="Liiiiife logo" />
        <Search />
        <Cart />
      </SCWrap>
    </SCHeaderMain>
  );
};

export default HeaderMain;
