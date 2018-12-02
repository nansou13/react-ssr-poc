import React from "react";
import styled from "styled-components";

export const SCQuoteWrap = styled("a")`
  width: 100%;
  max-width: 390px;
  height: 210px;
  position: relative;
  border-radius: 6px;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: #05396b;
    opacity: 50%;
    z-index: 2;
  }

  img {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    object-fit: cover;
    z-index: 1;
  }
`;

export const SCQuoteTitle = styled("span")`
  font-size: 12px;
  color: #39aea9;
  letter-spacing: 1.92px;
  text-align: center;
  line-height: 16px;
  text-transform: uppercase;
  display: block;
`;

export const SCText = styled("p")`
  font-family: "Playfair Display", sans-serif;
  font-size: 25px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 30px;
  font-style: italic;
  font-weight: bold;
  position: relative;
  margin: 20px auto;

  &::before,
  &:after {
    content: "“";
    position: absolute;
    opacity: 0.5;
    font-family: "Playfair Display", sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 100px;
    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    line-height: 30px;
    left: -38px;
    top: 11px;
  }

  &::after {
    content: "”";
    left: auto;
    top: auto;
    bottom: -30px;
    right: -10px;
  }
`;

export const SCAuthor = styled("p")`
  font-size: 18px;
  color: #39aea9;
  letter-spacing: 0.24px;
  font-weight: 900;
  text-align: right;
`;

export const SCAuthorWork = styled("p")`
  font-size: 12px;
  color: #fff;
  letter-spacing: 0.24px;
  text-align: right;
`;

export const SCQuoteContent = styled("div")`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 3;
  padding: 25px 42px;
`;

const Quote = () => {
  return (
    <SCQuoteWrap href="#">
      <img
        srcSet={`${"https://images.unsplash.com/photo-1520931674431-de5b4b2cc562?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf892a06a8141d8d0823c4b4c6cce613&auto=format&fit=crop&w=800&q=60"} 2x`}
        alt="experts citation"
      />
      <SCQuoteContent>
        <SCQuoteTitle>Nos experts ont la parole</SCQuoteTitle>
        <SCText>Duis iaculis felis eget leo gravida, eget placerat…</SCText>
        <SCAuthor>Julie B.</SCAuthor>
        <SCAuthorWork>Infirmière Liiiiife</SCAuthorWork>
      </SCQuoteContent>
    </SCQuoteWrap>
  );
};

export default Quote;
