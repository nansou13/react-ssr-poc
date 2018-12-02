import React from "react";
import styled from "styled-components";

export const SCWrap = styled("div")`
  width: 100%;
  padding: 0 1em;
  max-width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

export const SCMain = styled("div")`
  margin: 28px auto;
`;

export const Main = props => {
  return (
    <SCMain>
      <SCWrap>{props.children}</SCWrap>
    </SCMain>
  );
};
