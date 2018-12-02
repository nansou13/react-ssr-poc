import React from "react";
import { SCWrap } from "../Layout";
import { SCTrustSection, SCTrustItem } from "./styles";
import { ReactComponent as CardSvg } from "../../assets/svg/card.svg";
import { ReactComponent as SupportSvg } from "../../assets/svg/support.svg";
import { ReactComponent as TruckSvg } from "../../assets/svg/truck.svg";
import { ReactComponent as LockSvg } from "../../assets/svg/lock.svg";
import { ReactComponent as ThumbUpSvg } from "../../assets/svg/thumbup.svg";

const TrustSection = () => {
  return (
    <SCTrustSection>
      <SCWrap>
        <SCTrustItem>
          <CardSvg />
          <span>Prise en charge Tiers&nbsp;Payant</span>
        </SCTrustItem>
        <SCTrustItem>
          <ThumbUpSvg />
          <span>Conseils et Tests par nos&nbsp;experts</span>
        </SCTrustItem>
        <SCTrustItem>
          <TruckSvg />
          <span>Livraison et retours gratuits</span>
        </SCTrustItem>
        <SCTrustItem>
          <LockSvg />
          <span>Paiement sécurisé</span>
        </SCTrustItem>
        <SCTrustItem>
          <SupportSvg />
          <span>Service client 01&nbsp;76&nbsp;35&nbsp;01&nbsp;29 </span>
        </SCTrustItem>
      </SCWrap>
    </SCTrustSection>
  );
};

export default TrustSection;
