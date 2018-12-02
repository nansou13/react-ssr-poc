import React from "react";
import { SCWrap } from "../Layout";
import { SCMenuNetwork, SCNetworkLink } from "./styles";

const MenuNetwork = () => {
  return (
    <SCMenuNetwork>
      <SCWrap>
        <SCNetworkLink href="#" color="#5CDB94">
          Media
        </SCNetworkLink>
        <SCNetworkLink href="#" color="#2F2FA1" active>
          Boutique
        </SCNetworkLink>
        <SCNetworkLink href="#" color="#40A4D8">
          Service
        </SCNetworkLink>
      </SCWrap>
    </SCMenuNetwork>
  );
};

export default MenuNetwork;
