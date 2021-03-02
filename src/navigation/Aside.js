import React from "react";
import styled, { css } from "styled-components";
import Backdrop from "./Backdrop";

const SideNavWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  ${({ side }) => side}: 0;
  width: 300px;
  transition: 2s;
  visibility: hidden;
  justify-content: center;
  transform: translateX(-100%);
  align-items: center;
  ${({ theme }) => theme.mq.lg} {
    ${({ side }) =>
      side === "left" &&
      css`
        display: none;
      `}
  }
  ${({ theme }) => theme.mq.sm} {
    width: 300px;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateX(0);
      visibility: visible;
    `}
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  z-index: 200;
  background-color: ${({ theme }) => theme.white};
`;
const HeaderTitle = styled.h1`
  margin: 30px 0;
  text-transform: uppercase;
`;
const CloseButton = styled.div``;
const Aside = ({ children, title, close, isActive, side }) => {
  return (
    <SideNavWrapper isActive={isActive} side={side}>
      <Backdrop isActive={isActive} onClick={close} />
      <ContentWrapper>
        <HeaderWrapper>
          <HeaderTitle>{title}</HeaderTitle>
          <CloseButton onClick={close}>X</CloseButton>
        </HeaderWrapper>
        {children}
      </ContentWrapper>
    </SideNavWrapper>
  );
};

export default Aside;
