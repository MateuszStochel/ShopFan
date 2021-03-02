import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import SideDrawer from "./SideDrawer";
import ToolbarBottom from "./ToolbarBottom";
import ToolbarTop from "./ToolbarTop";
import SideShoppingCart from "./SideShoppingCart";

const Wrapper = styled.div`
  position: relative;
`;

const Navigation = () => {
  const { pathname } = useLocation();
  const [scrollY, setScrollY] = useState(window.pageYOffset);

  useEffect(() => {
    const onScrollY = () => {
      setScrollY(window.pageYOffset);
    };
    window.addEventListener("scroll", onScrollY);
    return () => window.removeEventListener("scroll", onScrollY);
  }, []);

  return (
    <Wrapper>
      <ToolbarTop isBackgroundTransparent={pathname === "/" && scrollY < 10} />
      <ToolbarBottom isBackgroundBlack={pathname === "/" && scrollY > 20} />
      <SideDrawer />
      <SideShoppingCart />
    </Wrapper>
  );
};

export default Navigation;
