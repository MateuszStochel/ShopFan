import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import DrawerToggleButton from "./DrawerToggleButton";

import heartIcon from "../assets/svg/heart.svg";
import cartIcon from "../assets/svg/cart.svg";
import styled, { css } from "styled-components";
import Logo from "./Logo";
import { NavigationContext } from "../context/NavigationProvider";

const ToolbarWrapper = styled.div`
  position: fixed;
  top: 30px;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  border-bottom: 1px solid white;
  height: 90px;
  transition: 0.3s;
  z-index: ${({ theme }) => theme.zIndex.l2};
  ${({ theme }) => theme.mq.lg} {
    ${({ background }) =>
      background &&
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
`;
const Icon = styled.button`
  width: 30px;
  height: 30px;
  background: url(${({ icon }) => icon}) no-repeat center;
  background-size: 100%;
  color: white !important;
  border: none;
  cursor: pointer;
`;

const ToolbarTop = ({ isBackgroundTransparent }) => {
  const {
    drawerToggleClickHandler,
    shoppingCartToggleClickHandler,
  } = useContext(NavigationContext);

  return (
    <ToolbarWrapper background={isBackgroundTransparent}>
      <InnerWrapper>
        <LinkItemsWrapper>
          <DrawerToggleButton drawerClickHandler={drawerToggleClickHandler} />
          <LinkItem to="/">Home</LinkItem>
          <LinkItem to="/">Catalog</LinkItem>
        </LinkItemsWrapper>
        <LogoWrapper>
          <Logo border="border-right" background={isBackgroundTransparent}>
            WOMEN
          </Logo>
          <LogoContentMid>&</LogoContentMid>
          <Logo border="border-left" background={isBackgroundTransparent}>
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
