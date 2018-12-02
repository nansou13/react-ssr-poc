import React from "react";
import styled from "styled-components";
import { ReactComponent as StarSvg } from "../../assets/svg/star.svg";
import { ReactComponent as StarActiveSvg } from "../../assets/svg/star-active.svg";

export const SCCard = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SCCardThumb = styled("img")`
  width: 100%;
  height: 210px;
  object-fit: contain;
  background: #f5f5f5;
  margin-bottom: 12px;
`;

export const SCCardTitle = styled("a")`
  font-size: 14px;
  text-decoration: none;
  color: #242582;
  letter-spacing: 0.24px;
  margin-bottom: 3px;
`;

export const SCCardSubTitle = styled("a")`
  text-decoration: none;
  color: #9f9f9f;
  letter-spacing: 1.92px;
  font-size: 12px;
  text-transform: uppercase;
`;

export const SCCardBottom = styled("div")`
  display: flex;
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  padding: 20px 0;
`;

const Product = () => {
  return (
    <SCCard>
      <SCCardThumb
        srcSet={
          "https://cdntenaprod.blob.core.windows.net/images-c5/167/192167/Tena_14_1600x500_png/tena-ppants-plus-int.png 2x"
        }
      />
      <SCCardTitle>Culotte absorbante Tena Pants Plus</SCCardTitle>
      <SCCardSubTitle>TENA</SCCardSubTitle>
      <SCCardBottom justify="space-between">
        <ProductRating rating="4" />
        <ProductPrice price="48,90€" text="à partir de" />
      </SCCardBottom>
    </SCCard>
  );
};

const ProductRating = props => {
  const rating = Number(props.rating);
  let ratingHtml = [];
  for (let index = 0; index < 5; index++) {
    if (index + 1 <= rating) {
      ratingHtml.push(<StarActiveSvg />);
    } else {
      ratingHtml.push(<StarSvg />);
    }
  }
  return <span>{ratingHtml}</span>;
};

export const SCPriceWrap = styled("div")`
  position: relative;
`;

export const SCPrice = styled("span")`
  font-weight: 900;
  color: #f64c71;
  letter-spacing: 2.56px;
`;

export const SCPriceHelp = styled("div")`
  position: absolute;
  bottom: 110%;
  right: 0;
  width: 100px;
  text-align: right;
`;

export const SCOldPrice = styled("span")`
  font-weight: bold;
  font-size: 12px;
  color: #242582;
  letter-spacing: 1.92px;
  line-height: 16px;
  text-decoration: line-through;
`;

export const SCPriceText = styled("span")`
  font-weight: bold;
  font-size: 12px;
  color: #888888;
  line-height: 16px;
`;

const ProductPrice = props => {
  return (
    <SCPriceWrap>
      {props.oldPrice && (
        <SCPriceHelp>
          <SCOldPrice>{props.oldPrice}</SCOldPrice>
        </SCPriceHelp>
      )}
      {props.text && (
        <SCPriceHelp>
          <SCPriceText>{props.text}</SCPriceText>
        </SCPriceHelp>
      )}
      <SCPrice>{props.price}</SCPrice>
    </SCPriceWrap>
  );
};

export default Product;
