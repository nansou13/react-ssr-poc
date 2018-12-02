import React from "react";
import styled from "styled-components";
import assuranceImg from "../../assets/images/assurance.png";

export const SCAssuranceWrap = styled("a")`
  width: 100%;
  max-width: 390px;
  height: 210px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Assurance = () => {
  return (
    <SCAssuranceWrap href="#">
      <img srcSet={`${assuranceImg} 2x`} alt="Tiers payant" />
    </SCAssuranceWrap>
  );
};

export default Assurance;
