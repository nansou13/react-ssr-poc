import styled from "styled-components";

export const SCBreadcrumb = styled("div")`
  font-size: 11px;
  letter-spacing: 0.5px;
  color: #242582;
  margin: 10px 0;

  a + span {
    margin: 0 1em;
  }
`;

export const SCBreadcrumbLink = styled("a")`
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
