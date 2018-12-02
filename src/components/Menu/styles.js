import styled, { css } from "styled-components";
import { media } from "../../helpers";

export const SCMenuNetwork = styled("div")`
  font-size: 18px;
  letter-spacing: 0.16px;
  text-transform: uppercase;

  & > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 40px;
  }
`;

export const SCNetworkLink = styled("a")`
  color: ${props => (props.color ? props.color : "#242582")};
  text-decoration: none;
  cursor: pointer;
  line-height: 24px;
  display: inline-block;
  position: relative;
  padding: 0 1.2em;
  z-index: 3;

  & + a {
    margin-left: 1em;
  }

  &:before {
    display: none;
    content: "";
    z-index: -1;
    position: absolute;
    left: 0;
    width: 100%;
    border-radius: 10px;
    transform: translateY(-50%);
    top: 50%;
    height: 49px;
    background: #fff;
  }

  ${props =>
    props.active &&
    css`
      font-weight: bold;

      &:before {
        display: inline-block;
      }
    `}
`;

export const SCMenuBoutique = styled("div")`
  font-size: 18px;
  background: #242582;
  color: #fff;
  margin: 4px 0 0;

  & > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 40px;
  }
`;

export const SCBoutiqueLink = styled("a")`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  line-height: 1;
  display: inline-flex;
  height: 100%;
  flex: auto;
  height: 66px;
  align-items: center;
  justify-content: center;
  padding: 0 1em;
  text-align: center;
  transition: box-shadow 0.2s linear;

  ${media.xl`
    font-size: 15px;
  `}

  & + a {
    margin-left: 1.66em;
  }

  &:hover {
    box-shadow: inset 0 -6px 0 #696bff;
  }

  ${props =>
    props.active &&
    css`
      font-weight: bold;
      box-shadow: inset 0 -6px 0 #696bff;
    `}
`;
