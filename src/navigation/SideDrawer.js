import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
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

const SideDrawerLink = styled(Link)``;
const SideDrawer = ({ show, drawerClickHandler }) => {
  return (
    <Aside title="menu" close={drawerClickHandler} isActive={show} side="left">
      <SideDrawerLinksWrapper show={show}>
        <SideDrawerLink onClick={drawerClickHandler} to="/">
          Home
        </SideDrawerLink>
        <SideDrawerLink>Catalog</SideDrawerLink>
        <SideDrawerLink>Sth</SideDrawerLink>
        <div onClick={drawerClickHandler}>X</div>
      </SideDrawerLinksWrapper>
    </Aside>
  );
};

export default SideDrawer;
