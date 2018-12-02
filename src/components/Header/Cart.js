import React from "react";
import { SCHeaderLink, SCCartNotification } from "./styles";

const Cart = () => {
  return (
    <div>
      <SCHeaderLink href="#">
        <img src="/static/assets/svg/user.svg" />
        Mon Compte
      </SCHeaderLink>
      <SCHeaderLink href="#">
        <SCCartNotification>01</SCCartNotification>
        <img src="/static/assets/svg/cart.svg" />
        Panier
      </SCHeaderLink>
    </div>
  );
};

export default Cart;
