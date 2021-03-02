import React from "react";
import styled, { css } from "styled-components";

import closeIcon from "../assets/svg/delete.svg";

const SideNavWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  ${({ side }) => side}: 0;
  visibility: hidden;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  transform: translateX(-100%);
  align-items: center;
  transition: 0.3s;
  z-index: ${({ theme }) => theme.zIndex.l10};
  background-color: red;
  ${({ side }) =>
    side === "right" &&
    css`
      transform: translateX(100%);
    `}
  ${({ theme }) => theme.mq.lg} {
    ${({ side }) =>
      side === "left" &&
      css`
        display: none;
      `}
  }
  ${({ theme }) => theme.mq.sm} {
    width: 400px;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      visibility: visible;
      transform: translateX(0);
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
const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  background: url(${({ icon }) => icon}) no-repeat center;
  border: none;
  transition: 0.5s;
  &:hover {
    transform: rotate(360deg);
  }
`;
const Aside = ({ children, asideTitle, onClose, isActive, side }) => {
  return (
    <SideNavWrapper isActive={isActive} side={side}>
      <ContentWrapper>
        <HeaderWrapper>
          <HeaderTitle>{asideTitle}</HeaderTitle>
          <CloseButton icon={closeIcon} onClick={onClose}></CloseButton>
        </HeaderWrapper>
        {children}
      </ContentWrapper>
    </SideNavWrapper>
  );
};

export default Aside;
