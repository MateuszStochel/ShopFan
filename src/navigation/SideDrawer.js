import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { NavigationContext } from "../context/NavigationProvider";
import Aside from "./Aside";

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
  const { sideDrawerOpen, drawerToggleClickHandler } = useContext(
    NavigationContext
  );
  return (
    <Aside
      title="menu"
      close={drawerToggleClickHandler}
      isActive={sideDrawerOpen}
      side="left"
    >
      <SideDrawerLinksWrapper show={sideDrawerOpen}>
        <SideDrawerLink onClick={drawerToggleClickHandler} to="/">
          Home
        </SideDrawerLink>
        <SideDrawerLink>Catalog</SideDrawerLink>
        <SideDrawerLink>Sth</SideDrawerLink>
        <div onClick={drawerToggleClickHandler}>X</div>
      </SideDrawerLinksWrapper>
    </Aside>
  );
};

export default SideDrawer;
