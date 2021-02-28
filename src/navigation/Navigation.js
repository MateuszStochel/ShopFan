import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Toolbar from "./Toolbar";

const Wrapper = styled.div`
  position: fixed;
`;

const Navigation = () => {
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
      <Toolbar isBackgroundWhite={scrollY > 20} />
    </Wrapper>
  );
};

export default Navigation;
