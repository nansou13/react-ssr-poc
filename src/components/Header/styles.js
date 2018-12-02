import styled from "styled-components";

export const SCHeaderTop = styled("div")`
  background: #f5f5f5;
  font-size: 12px;
  color: #888888;
  line-height: 30px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SCHeaderLink = styled("a")`
  display: inline-flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  position: relative;

  & + a {
    margin-left: 21px;
  }

  svg {
    margin-right: 0.5em;
    width: auto;
    height: 1em;
  }
`;

export const SCHeaderMain = styled("div")`
  padding: 18px 0;
  color: #29325c;

  & > div {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

export const SCCartNotification = styled("span")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #168138;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 10px;
  position: absolute;
  top: -23px;
  left: -2px;
`;
