import React from "react";
import { SCWrap } from "../Layout";
import { SCMenuBoutique, SCBoutiqueLink } from "./styles";

const MenuNetwork = () => {
  return (
    <SCMenuBoutique>
      <SCWrap>
        <SCBoutiqueLink href="#">Vie quotidienne</SCBoutiqueLink>
        <SCBoutiqueLink href="#" active>
          Incontinence
        </SCBoutiqueLink>
        <SCBoutiqueLink href="#">Orthopédie</SCBoutiqueLink>
        <SCBoutiqueLink href="#">Salle de bain et WC</SCBoutiqueLink>
        <SCBoutiqueLink href="#">Diagnostics et soins</SCBoutiqueLink>
        <SCBoutiqueLink href="#">
          Aide à la mobilité et prévention de chute
        </SCBoutiqueLink>
      </SCWrap>
    </SCMenuBoutique>
  );
};

export default MenuNetwork;
