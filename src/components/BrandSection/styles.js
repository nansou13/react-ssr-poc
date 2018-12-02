import styled from "styled-components";

export const SCBrandSection = styled("div")`
  background: #f1f1f1;
  padding: 35px 0;
`;

export const SCBrandSelector = styled("div")`
  width: 100%;
  max-width: 270px;
  margin-right: 35px;

  h3 {
    font-size: 35px;
    color: #2f2fa1;
    margin-bottom: 1em;
  }

  p {
    color: #888888;
    letter-spacing: 0.24px;
    line-height: 1.5;
    margin-bottom: 1em;
  }
`;

export const SCBrandList = styled("div")`
  flex: 1;
  display: grid;
  grid-column-gap: 45px;
  grid-row-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`;

export const SCBrandItem = styled("div")`
  height: 70px;
  img {
    width: 100%;
    object-fit: contain;
    height: inherit;
  }
`;

export const SCBrandFlex = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;
