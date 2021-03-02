import styled from "styled-components";

const Logo = styled.h1`
  transform: rotate(-4deg);
  font-size: 25px;
  border: 3px solid black;
  padding: 4px;
  ${({ border }) => border}: none;
  color: ${({ theme }) => theme.black};
  ${({ theme }) => theme.mq.lg} {
    color: ${({ backgroundTransparent }) =>
      backgroundTransparent ? "white" : "black"};
    border-color: ${({ backgroundTransparent }) =>
      backgroundTransparent ? "white" : "black"};
  }
  ${({ theme }) => theme.mq.sm} {
    font-size: 35px;
  }
  ${({ theme }) => theme.mq.lg} {
    font-size: 40px;
  }
`;

export default Logo;
