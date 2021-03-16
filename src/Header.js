import React from "react";

import { useLocation } from "react-router";

import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-top: 150px;
  box-shadow: 0 0.4px 0 ${({ theme }) => theme.grey};
`;

const PageTitle = styled.h1`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  font-size: 30px;
  text-transform: uppercase;
`;

const links = ["catalog", "checkout", "wishlist"];

const Header = () => {
  const { pathname } = useLocation();
  const URL = links.filter((link) => link === pathname.slice(1));

  return (
    <HeaderWrapper>
      <PageTitle>{URL}</PageTitle>
    </HeaderWrapper>
  );
};

export default Header;
