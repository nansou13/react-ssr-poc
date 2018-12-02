import React from "react";
import styled, { css } from "styled-components";

export const SCMenuSidebar = styled("div")`
  display: flex;
  flex-direction: column;
  color: #2f2fa1;
  background: #fff;
  width: 260px;
  border: 1px solid #d8d8d8;
`;

export const SCMenuSidebarLink = styled("a")`
  display: flex;
  align-items: center;
  height: 53px;
  font-size: 16px;
  color: inherit;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 24px;
  position: relative;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  &:first-child {
    border-top: none;
  }

  &:hover {
    background: #2f2fa1;
    color: #fff;
  }

  &:before {
    display: none;
    left: 100%;
    top: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-left-color: #2f2fa1;
    border-width: 8px;
    margin-top: -8px;
  }

  ${props =>
    props.active &&
    css`
      background: #2f2fa1;
      color: #fff;
      font-weight: bold;

      &:before {
        display: inline-block;
      }
    `}

  ${props =>
    props.important &&
    css`
      color: #f64c71;
    `}
`;

const MenuSidebar = () => {
  return (
    <SCMenuSidebar>
      <SCMenuSidebarLink href="#" important>
        Promotions
      </SCMenuSidebarLink>
      <SCMenuSidebarLink href="#" active>
        Nos meilleures ventes
      </SCMenuSidebarLink>
      <SCMenuSidebarLink href="#">Les nouveautés</SCMenuSidebarLink>
      <SCMenuSidebarLink href="#">Top incontinence</SCMenuSidebarLink>
      <SCMenuSidebarLink href="#">Top diagnostic et soins</SCMenuSidebarLink>
      <SCMenuSidebarLink href="#">Top mobilité</SCMenuSidebarLink>
      <SCMenuSidebarLink href="#">Top orthopédie</SCMenuSidebarLink>
      <SCMenuSidebarLink href="#">Top salle de bain</SCMenuSidebarLink>
    </SCMenuSidebar>
  );
};

export default MenuSidebar;
