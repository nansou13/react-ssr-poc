import React from "react";
import styled from "styled-components";

const SearchInput = styled("input")`
  height: 24px;
  padding: 0px;
  background: transparent;
  border: none;
  font-size: 14px;
  letter-spacing: 0.13px;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #cfcfcf;
    font-style: italic;
  }
`;

const SearchControl = styled("div")`
  padding: 0px 20px 6px 0;
  border-bottom: 1px solid #cccccc;
  position: relative;
  max-width: 345px;
  width: 100%;

  &:focus-within {
    border-color: RGBA(124, 172, 41, 0.3);
  }

  img {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }
`;

const Search = () => {
  return (
    <SearchControl>
      <SearchInput placeholder="Saisissez votre recherche…" />
      <img src="/static/assets/svg/search.svg" alt="loupe de recherche" />
    </SearchControl>
  );
};

export default Search;
