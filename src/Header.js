import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  margin-top: 150px;
  width: 100%;
  height: 60px;
  align-items: center;
  box-shadow: 0 0.4px 0 ${({ theme }) => theme.grey};
`;

const PageTitle = styled.h1`
  margin: 0 auto;
  max-width: 1500px;
  width: 100%;
  font-size: 30px;
  padding-left: 20px;
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
