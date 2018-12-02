import React from "react";
import styled from "styled-components";
import { SCWrap } from "../Layout";

export const SCNewsletter = styled("div")`
  background: #39aea9;
  padding: 1em 0;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    color: #032547;
    font-size: 20px;
    letter-spacing: 0.24px;
    margin-right: 1em;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SCInput = styled("input")`
  border-radius: 3px;
  padding: 8px 16px;
  border: none;
  background: #fff;
  letter-spacing: 0.01px;
  font-size: 14px;
  outline: none;
  min-width: 250px;

  &:placeholder {
    color: #888888;
  }
`;

export const SCSubmit = styled("SCInput")`
  border-radius: 3px;
  padding: 8px 16px;
  border: none;
  background: #12123d;
  letter-spacing: 1.2px;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  color: #39aea9;
  margin-left: 5px;
`;

const Newsletter = () => {
  return (
    <SCNewsletter>
      <SCWrap>
        <p>Recevez de l’info ainsi que nos promos et nouveautés !</p>
        <form>
          <SCInput placeholder="Renseignez votre adresse e-mail" />
          <SCSubmit>Souscrire</SCSubmit>
        </form>
      </SCWrap>
    </SCNewsletter>
  );
};

export default Newsletter;
