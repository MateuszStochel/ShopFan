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
const SideDrawerLink = styled(Link)`
  margin-bottom: 20px;
  font-size: 20px;
`;
const SideDrawer = () => {
  const { isSideDrawer, drawerToggleClickHandler } = useContext(
    NavigationContext
  );
  return (
    <Aside
      asideTitle="menu"
      side="left"
      onClose={drawerToggleClickHandler}
      isActive={isSideDrawer}
    >
      <SideDrawerLinksWrapper show={isSideDrawer}>
        <SideDrawerLink onClick={drawerToggleClickHandler} to="/home">
          Home
        </SideDrawerLink>
        <SideDrawerLink to="/">Catalog</SideDrawerLink>
        <SideDrawerLink to="/">Sth</SideDrawerLink>
        <div onClick={drawerToggleClickHandler}>X</div>
      </SideDrawerLinksWrapper>
    </Aside>
  );
};

export default SideDrawer;
