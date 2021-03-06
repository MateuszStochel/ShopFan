import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { NavigationContext } from "../context/NavigationProvider";

import Aside from "./Aside";

import styled, { css } from "styled-components";

const SideDrawerLinksWrapper = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;

  ${({ theme }) => theme.mq.lg} {
    ${({ show }) =>
      show &&
      css`
        & {
          display: none;
        }
      `};
  }
`;
const SideDrawerLink = styled(Link)``;
const SideShoppingCart = () => {
  const { shoppingCartToggleClickHandler, isSideCart } = useContext(
    NavigationContext
  );

  return (
    <Aside
      asideTitle="menu"
      onClose={shoppingCartToggleClickHandler}
      isActive={isSideCart}
      side="right"
    >
      <SideDrawerLinksWrapper show={isSideCart}>
        <SideDrawerLink onClick={shoppingCartToggleClickHandler} to="/">
          Home
        </SideDrawerLink>
        <SideDrawerLink to="/">Catalog</SideDrawerLink>
        <SideDrawerLink to="/">Sth</SideDrawerLink>
        <div onClick={shoppingCartToggleClickHandler}>X</div>
      </SideDrawerLinksWrapper>
    </Aside>
  );
};

export default SideShoppingCart;
