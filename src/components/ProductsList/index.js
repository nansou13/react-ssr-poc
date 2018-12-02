import React from "react";
import styled from "styled-components";
import Product from "../Product";
import { ButtonOutline } from "../Button";

export const SCProductsList = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 28px;
`;

export const SCProductsListTitle = styled("h2")`
  background: #fff;
  position: relative;
  z-index: 2;
  font-size: 35px;
  color: #2f2fa1;
  font-weight: normal;
  margin-bottom: 17px;
`;

const ProductsList = () => {
  return (
    <div>
      <SCProductsListTitle>Nos meilleures ventes</SCProductsListTitle>
      <SCProductsList>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </SCProductsList>
      <ButtonOutline>Voir toutes les meilleurs ventes</ButtonOutline>
    </div>
  );
};

export default ProductsList;
