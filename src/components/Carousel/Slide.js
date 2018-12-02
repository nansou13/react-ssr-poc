import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../Button";

export const SCSlide = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2em;
`;

export const SCSlideContent = styled("div")`
  flex: 0 0 270px;

  h3 {
    font-size: 25px;
    font-weight: 900;
    color: #242582;
    letter-spacing: 3px;
    margin-bottom: 1em;
  }

  p {
    font-size: 14px;
    letter-spacing: 0.24px;
    line-height: 20px;
    color: #fff;
    margin-bottom: 3em;
  }
`;

export const SCSlidePrice = styled("span")`
  display: inline-block;
  font-size: 80px;
  font-weight: 900;
  color: #f64c71;
  margin-bottom: 10px;
  position: relative;

  sub,
  sup {
    position: absolute;
    font-size: 30px;
    left: 100%;
    top: 50%;
  }

  sup {
    font-size: 40px;
    top: 0;
  }
`;

export const SCSlideImage = styled("div")`
  flex: 1;
  align-self: flex-end;
  margin-left: 2em;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Slide = () => {
  return (
    <SCSlide>
      <SCSlideContent>
        <h3>Duis iaculis felis eget leo gravida, eget placerat </h3>
        <p>
          Duis iaculis felis eget leo gravida, eget placerat sapien scelerisque.
          Nunc sollicitudin odio at mi posuere.
        </p>
        <SCSlidePrice>
          49,<sub>90</sub>
          <sup>€</sup>
        </SCSlidePrice>
        <br />
        <ButtonPrimary>J'achète</ButtonPrimary>
      </SCSlideContent>
      <SCSlideImage>
        <img
          srcSet={
            "https://cdntenaprod.blob.core.windows.net/images-c5/167/192167/Tena_14_1600x500_png/tena-ppants-plus-int.png 2x"
          }
          alt=""
        />
      </SCSlideImage>
    </SCSlide>
  );
};

export default Slide;
