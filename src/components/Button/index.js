import React from "react";
import styled from "styled-components";

export const SCButtonOutline = styled("button")`
  font-size: 14px;
  color: #f64c71;
  letter-spacing: 1.2px;
  text-align: center;
  line-height: 16px;
  padding: 7px 1em;
  border: 1px solid #f64c71;
  border-radius: 3px;
  text-transform: uppercase;
`;

export const ButtonOutline = props => {
  return <SCButtonOutline>{props.children}</SCButtonOutline>;
};

export const SCButtonPrimary = styled("button")`
  background: #f64c71;
  font-weight: 900;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 1.2px;
  padding: 13px 1em;
  border: none;
  text-align: center;
  line-height: 16px;
  border-radius: 3px;
  text-transform: uppercase;
  display: inline-block;
`;

export const ButtonPrimary = props => {
  return <SCButtonPrimary>{props.children}</SCButtonPrimary>;
};
