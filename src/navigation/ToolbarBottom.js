import React from "react";
import styled from "styled-components";

const ToolbarBottomWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.l2};
  width: 100%;
  height: 30px;
  background-color: transparent;
`;

const InnerWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  height: 100%;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;
const Button = styled.button`
  height: 100%;
  margin: 0 20px;
  font-size: 16px;
  color: white;
  border: none;
  text-transform: uppercase;
  background-color: transparent;
`;

const ToolbarBottom = () => {
  return (
    <ToolbarBottomWrapper>
      <InnerWrapper>
        <ButtonsWrapper>
          <Button>Register</Button>
          <Button>Login</Button>
        </ButtonsWrapper>
      </InnerWrapper>
    </ToolbarBottomWrapper>
  );
};

export default ToolbarBottom;
