import React, { useRef } from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";

const SideNavWrapper = styled.div`
  position: fixed;
  top: 0;
  ${({ side }) => side}: 0;
  bottom: 0;
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  background-color: red;
  z-index: 1009;
`;
const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  z-index: 200;
`;
const HeaderTitle = styled.h1``;
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
