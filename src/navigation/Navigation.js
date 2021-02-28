import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import ToolbarBottom from "./ToolbarBottom";
import ToolbarTop from "./ToolbarTop";

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
      <ToolbarTop isBackgroundWhite={pathname === "/" && scrollY > 20} />
      <ToolbarBottom isBackgroundBlack={pathname === "/" && scrollY > 20} />
    </Wrapper>
  );
};

export default Navigation;
