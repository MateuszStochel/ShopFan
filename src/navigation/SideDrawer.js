import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Aside = styled.div`
  z-index: 222222;
  width: 100%;
  height: 100%;
`;
const SideDrawerLinksWrapper = styled.div`
  position: absolute;
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  background-color: white;
  height: 100vh;
  width: 70%;
  z-index: 20200;
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
    <Aside>
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
