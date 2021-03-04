import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { NavigationContext } from "../context/NavigationProvider";

import Logo from "./Logo";
import cartIcon from "../assets/svg/cart.svg";
import heartIcon from "../assets/svg/heart.svg";
import bars from "../assets/svg/bars.svg";

import styled, { css } from "styled-components";

const ToolbarWrapper = styled.div`
  position: fixed;
  top: 30px;
  width: 100%;
  border-bottom: 1px solid white;
  height: 70px;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.white};
  z-index: ${({ theme }) => theme.zIndex.l4};
  ${({ theme }) => theme.mq.lg} {
    ${({ backgroundTransparent }) =>
      backgroundTransparent &&
      css`
        & {
          background-color: transparent;
        }
        & ${LinkItem} {
          color: ${({ theme }) => theme.white};
        }
        & ${LogoContentMid} {
          color: ${({ theme }) => theme.white};
        }
        & ${Icon} {
          filter: invert(1);
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

const LinkItem = styled(NavLink)`
  padding-left: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  font-size: 25px;
  display: none;
  transition: 0.3s;
  ${({ theme }) => theme.mq.lg} {
    display: flex;
  }
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoContentMid = styled.span`
  color: ${({ theme }) => theme.black};
  font-size: 20px;
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
  ${({ sideMenu }) =>
    sideMenu &&
    css`
      ${({ theme }) => theme.mq.lg} {
        display: none;
      }
    `}
`;
const Icon = styled.button`
  width: 25px;
  height: 25px;
  background: url(${({ icon }) => icon}) no-repeat center;
  background-size: 100%;
  border: none;
  cursor: pointer;
  ${({ theme }) => theme.mq.sm} {
    width: 30px;
    height: 30px;
  }
`;

const ToolbarTop = ({ isBackgroundTransparent }) => {
  const {
    drawerToggleClickHandler,
    shoppingCartToggleClickHandler,
  } = useContext(NavigationContext);

  return (
    <ToolbarWrapper backgroundTransparent={isBackgroundTransparent}>
      <InnerWrapper>
        <LinkItemsWrapper>
          <Option sideMenu visible onClick={drawerToggleClickHandler}>
            <Icon icon={bars} />
          </Option>
          <LinkItem to="/">Home</LinkItem>
          <LinkItem to="/">Catalog</LinkItem>
        </LinkItemsWrapper>
        <LogoWrapper>
          <Logo
            border="border-right"
            backgroundTransparent={isBackgroundTransparent}
          >
            WOMEN
          </Logo>
          <LogoContentMid>&</LogoContentMid>
          <Logo
            border="border-left"
            backgroundTransparent={isBackgroundTransparent}
          >
            MEN
          </Logo>
        </LogoWrapper>
        <OptionsWrapper>
          <Option>
            <Icon icon={heartIcon} />
          </Option>
          <Option>
            <Icon icon={cartIcon} />
          </Option>
          <Option onClick={shoppingCartToggleClickHandler} visible>
            <Icon icon={cartIcon} />
          </Option>
        </OptionsWrapper>
      </InnerWrapper>
    </ToolbarWrapper>
  );
};

export default ToolbarTop;
