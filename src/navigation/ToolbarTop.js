import React from "react";
import { NavLink } from "react-router-dom";

import DrawerToggleButton from "./DrawerToggleButton";

import heartIcon from "../assets/svg/heart.svg";
import cartIcon from "../assets/svg/cart.svg";
import styled from "styled-components";

const ToolbarWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 300;
`;
const InnerWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LinkItemsWrapper = styled.div`
  display: flex;
`;
const LinkItem = styled(NavLink)`
  display: block;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const LogoContentLeft = styled.h1``;
const LogoContentMid = styled.span``;
const LogoContentRight = styled.h1``;
const OptionsWrapper = styled.div`
  display: flex;
`;
const Option = styled.div`
  margin: 0 8px;
  position: relative;
  border-radius: 50%;
  transition: 0.2s;
  cursor: pointer;
`;
const Icon = styled.div`
  width: 25px;
  height: 25px;
  filter: invert(0.5);
  background: url(${({ icon }) => icon}) no-repeat center;
  background-size: 100%;
  cursor: pointer;
`;

const ToolbarTop = (isBackgroundWhite) => {
  return (
    <ToolbarWrapper background={isBackgroundWhite}>
      <InnerWrapper>
        <LinkItemsWrapper>
          <DrawerToggleButton />
          <LinkItem to="/">Home</LinkItem>
          <LinkItem to="/">Catalog</LinkItem>
        </LinkItemsWrapper>
        <LogoWrapper>
          <LogoContentLeft>Women</LogoContentLeft>
          <LogoContentMid>&</LogoContentMid>
          <LogoContentRight>Man</LogoContentRight>
        </LogoWrapper>
        <OptionsWrapper>
          <Option>
            <Icon icon={heartIcon} />
          </Option>
          <Option>
            <Icon icon={cartIcon} />
          </Option>
          <Option>
            <Icon icon={cartIcon} />
          </Option>
        </OptionsWrapper>
      </InnerWrapper>
    </ToolbarWrapper>
  );
};

export default ToolbarTop;
