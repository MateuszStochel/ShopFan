import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.blackTransparent};
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
`;

export default Backdrop;
