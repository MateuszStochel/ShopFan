import React from "react";
import { NavLink } from "react-router-dom";

import DrawerToggleButton from "./DrawerToggleButton";

import heartIcon from "../assets/svg/heart.svg";
import cartIcon from "../assets/svg/cart.svg";
import styled, { css } from "styled-components";

const ToolbarWrapper = styled.div`
  position: fixed;
  top: 30px;
  width: 100%;
  background-color: white;
  height: 70px;
  z-index: ${({ theme }) => theme.zIndex.l5};
  ${({ theme }) => theme.mq.lg} {
    ${({ background }) =>
      background &&
      css`
        & {
          background-color: transparent;
        }
      `}
  }
`;
const InnerWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LinkItemsWrapper = styled.div`
  display: flex;
`;
const Logo = styled.h1`
  font-size: 40px;
`;
const LinkItem = styled(NavLink)`
  padding-left: 20px;
  display: none;
  transition: 2s;
  ${({ theme }) => theme.mq.lg} {
    display: flex;
  }
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const OptionsWrapper = styled.div`
  display: flex;
`;
const Option = styled.div`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  margin: 0 20px;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  ${({ theme }) => theme.mq.lg} {
    display: flex;
  }
`;
const Icon = styled.div`
  width: 25px;
  height: 25px;
  filter: invert(0.5);
  background: url(${({ icon }) => icon}) no-repeat center;
  background-size: 100%;
  cursor: pointer;
`;

const ToolbarTop = ({ isBackgroundTransparent, drawerClickHandler }) => {
  return (
    <ToolbarWrapper background={isBackgroundTransparent}>
      <InnerWrapper>
        <LinkItemsWrapper>
          <DrawerToggleButton drawerClickHandler={drawerClickHandler} />
          <LinkItem to="/">Home</LinkItem>
          <LinkItem to="/">Catalog</LinkItem>
        </LinkItemsWrapper>
        <LogoWrapper>
          <Logo>ShopFan</Logo>
        </LogoWrapper>
        <OptionsWrapper>
          <Option>
            <Icon icon={heartIcon} />
          </Option>
          <Option>
            <Icon icon={cartIcon} />
          </Option>
          <Option visible>
            <Icon icon={cartIcon} />
          </Option>
        </OptionsWrapper>
      </InnerWrapper>
    </ToolbarWrapper>
  );
};

export default ToolbarTop;
