import React from "react";
import Select from "react-select";
import { SCWrap } from "../Layout";
import {
  SCBrandSection,
  SCBrandSelector,
  SCBrandFlex,
  SCBrandList,
  SCBrandItem
} from "./styles";
import { SCTextRight } from "../Type";
import { ButtonPrimary } from "../Button";

const BrandSection = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];
  return (
    <SCBrandSection>
      <SCWrap>
        <SCBrandFlex>
          <SCBrandSelector>
            <h3>Nos marques</h3>
            <p>
              Duis iaculis felis eget leo gravida, eget placerat sapien
              scelerisque. Nuncicitudin odio ate fermentum.
            </p>
            <Select options={options} />
          </SCBrandSelector>
          <SCBrandList>
            <SCBrandItem>
              <img srcSet="http://acmelogos.com/images/logo-1.svg 2x" alt="" />
            </SCBrandItem>
            <SCBrandItem>
              <img srcSet="http://acmelogos.com/images/logo-2.svg 2x" alt="" />
            </SCBrandItem>
            <SCBrandItem>
              <img srcSet="http://acmelogos.com/images/logo-3.svg 2x" alt="" />
            </SCBrandItem>
            <SCBrandItem>
              <img srcSet="http://acmelogos.com/images/logo-4.svg 2x" alt="" />
            </SCBrandItem>
            <SCBrandItem>
              <img srcSet="http://acmelogos.com/images/logo-5.svg 2x" alt="" />
            </SCBrandItem>
            <SCBrandItem>
              <img srcSet="http://acmelogos.com/images/logo-6.svg 2x" alt="" />
            </SCBrandItem>
            <SCBrandItem>
              <img srcSet="http://acmelogos.com/images/logo-7.svg 2x" alt="" />
            </SCBrandItem>
          </SCBrandList>
        </SCBrandFlex>
        <SCTextRight>
          <ButtonPrimary>Voir toutes nos marques</ButtonPrimary>
        </SCTextRight>
      </SCWrap>
    </SCBrandSection>
  );
};

export default BrandSection;
