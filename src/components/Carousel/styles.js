import styled from "styled-components";

export const SCCarouselDots = styled("ul")`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  padding-left: 2em;

  li + li {
    margin-left: 17px;
  }
`;

export const SCCarouselDot = styled("span")`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  display: inline-block;
  background: #fff;

  .slick-active & {
    background: #242582;
  }
`;

export const SCCarousel = styled("div")`
  background: #8fd0ea;
`;

export const SCSlider = styled("div")`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
`;

export const SCAssurance = styled("div")`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SCQuote = styled("div")`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SCCarouselWrap = styled("div")`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 0;
`;
