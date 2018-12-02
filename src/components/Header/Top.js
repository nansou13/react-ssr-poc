import React from "react";
import { SCWrap } from "../Layout";
import { SCHeaderTop, SCHeaderLink } from "./styles";

const HeaderTop = () => {
  return (
    <SCHeaderTop>
      <SCWrap>
        <span>Liiiiife.com, tout pour le maintien à domicile</span>
        <div>
          <SCHeaderLink href="mailto:service.client@liiiiife.com">
            <img src="/static/assets/svg/mail.svg" />
            service.client@liiiiife.com
          </SCHeaderLink>
          <SCHeaderLink href="tel:+33176350129">
            <img src="/static/assets/svg/phone.svg" />
            +(33) 1 76 35 01 29
          </SCHeaderLink>
        </div>
      </SCWrap>
    </SCHeaderTop>
  );
};

export default HeaderTop;
