import styled from "styled-components";

export const SCTrustSection = styled("div")`
  color: #242582;
  background: #f8f9f9;
  padding: 10px 0;

  & > div {
    display: flex;
    align-items: center;
  }
`;

export const SCTrustItem = styled("div")`
  display: inline-flex;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.17px;
  align-items: center;

  svg {
    margin-right: 1em;
    height: 40px;
    width: auto;
    max-width: 60px;
  }
`;
