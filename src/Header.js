import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 0.4px 0 grey;
`;

const PageTitle = styled.h1`
  width: 100%;
  font-size: 30px;
  position: relative;
  padding-left: 20px;
  max-width: 1500px;
  margin: 0 auto;
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
