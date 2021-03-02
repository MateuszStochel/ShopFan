import styled from "styled-components";

const Logo = styled.h1`
  transform: rotate(-4deg);
  font-size: 40px;
  border: 3px solid black;
  padding: 4px;
  ${({ border }) => border}: none;
  color: ${({ theme }) => theme.black};
  ${({ theme }) => theme.mq.lg} {
    color: ${({ background }) => (background ? "white" : "black")};
    border-color: ${({ background }) => (background ? "white" : "black")};
  }
`;

export default Logo;
