import React from "react";
import styled from "styled-components";

const DrawerToggleButton = ({ drawerClickHandler }) => {
  const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: none;
    background: transparent;
    padding: 0;
    height: 25px;
    margin-left: 20px;
    width: 30px;
    cursor: pointer;
    ${({ theme }) => theme.mq.lg} {
      display: none;
    }
  `;

  const ToggleButtonLine = styled.div`
    width: 30px;
    height: 2px;
    background-color: ${({ theme }) => theme.black};
    &:nth-child(1) {
      width: 20px;
      height: 2px;
    }
    &:nth-child(2) {
      width: 25px;
    }
  `;

  return (
    <Button onClick={drawerClickHandler}>
      <ToggleButtonLine />
      <ToggleButtonLine />
      <ToggleButtonLine />
    </Button>
  );
};

export default DrawerToggleButton;
