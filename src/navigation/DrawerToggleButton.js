import React from "react";
import styled from "styled-components";

const DrawerToggleButton = ({ click }) => {
  const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: none;
    background: transparent;
    padding: 0;
    height: 25px;
    width: 30px;
    cursor: pointer;
  `;

  const ToggleButtonLine = styled.div`
    width: 30px;
    height: 2px;
    background-color: ${({ theme }) => theme.black};
    &:nth-child(1) {
      width: 20px;
    }
    &:nth-child(2) {
      width: 25px;
    }
  `;

  return (
    <Button onClick={click}>
      <ToggleButtonLine />
      <ToggleButtonLine />
      <ToggleButtonLine />
    </Button>
  );
};

export default DrawerToggleButton;
