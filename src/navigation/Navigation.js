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
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [sideCartOpen, setSideCartOpen] = useState(false);

  useEffect(() => {
    const onScrollY = () => {
      setScrollY(window.pageYOffset);
    };
    window.addEventListener("scroll", onScrollY);
    return () => window.removeEventListener("scroll", onScrollY);
  }, []);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };
  const shoppingCartToggleClickHandler = () => {
    setSideCartOpen(!sideCartOpen);
  };

  return (
    <Wrapper>
      <ToolbarTop
        isBackgroundTransparent={pathname === "/" && scrollY < 10}
        drawerClickHandler={drawerToggleClickHandler}
      />
      <ToolbarBottom isBackgroundBlack={pathname === "/" && scrollY > 20} />
      <SideDrawer
        show={sideDrawerOpen}
        drawerClickHandler={drawerToggleClickHandler}
      />
      <SideShoppingCart s={} />
    </Wrapper>
  );
};

export default Navigation;
