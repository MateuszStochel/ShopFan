import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import DrawerToggleButton from "./DrawerToggleButton";

const ToolbarWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  z-index: 300;
`;
const InnerWrapper = styled.div``;
const LinkItemsWrapper = styled.div``;
const LinkItem = styled(NavLink)``;
const LogoWrapper = styled.div``;
const LogoContentLeft = styled.h1``;
const LogoContentMid = styled.span``;
const LogoContentRight = styled.h1``;
const OptionsWrapper = styled.div``;
const Option = styled.div``;

const Toolbar = (isBackgroundWhite) => {
  return (
    <ToolbarWrapper background={isBackgroundWhite}>
      <InnerWrapper>
        <LinkItemsWrapper>
          <DrawerToggleButton />
          <LinkItem>Home</LinkItem>
          <LinkItem>Catalog</LinkItem>
        </LinkItemsWrapper>
        <LogoWrapper>
          <LogoContentLeft>Women</LogoContentLeft>
          <LogoContentMid>&</LogoContentMid>
          <LogoContentRight>Women</LogoContentRight>
        </LogoWrapper>
        <OptionsWrapper>
          <Option></Option>
          <Option></Option>
        </OptionsWrapper>
      </InnerWrapper>
    </ToolbarWrapper>
  );
};

export default Toolbar;
