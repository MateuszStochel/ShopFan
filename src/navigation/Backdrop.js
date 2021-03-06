import React, { useContext } from "react";

import { NavigationContext } from "../context/NavigationProvider";

import styled from "styled-components";

const BackdropNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.blackTransparent};
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
  z-index: ${({ theme }) => theme.zIndex.l5};
`;

const Backdrop = () => {
  const { isSideDrawer, setSideCart, setSideDrawer, isSideCart } = useContext(
    NavigationContext
  );

  return (
    <BackdropNav
      isActive={isSideDrawer || isSideCart}
      onClick={() => {
        isSideDrawer ? setSideDrawer() : setSideCart();
      }}
    />
  );
};

export default Backdrop;
