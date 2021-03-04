import styled from "styled-components";

const SlideTitle = styled.h1`
  transform: translateY(
    ${({ position }) => (position === "top" ? "-50%" : "50%")}
  );
  text-align: center;

  position: absolute;
  font-size: 30px;
  &:nth-child(3) {
    font-size: 25px;
  }
  ${({ position }) => position}: 0;
  width: 100%;
  &:after {
    content: "";
    position: absolute;
    bottom: 40%;
    left: 0;
    width: 10%;
    height: 7px;
    background-color: white;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 40%;
    right: 0;
    width: 10%;
    height: 7px;
    background-color: white;
  }

  ${({ theme }) => theme.mq.sm} {
    font-size: 40px;
    &:nth-child(3) {
      font-size: 35px;
    }
  }

  ${({ theme }) => theme.mq.lg} {
    font-size: 50px;

    &:nth-child(3) {
      font-size: 45px;
    }
    &:after,
    &:before {
      height: 10px;
    }
  }
  ${({ theme }) => theme.mq.xl} {
    font-size: 60px;
    &:nth-child(3) {
      font-size: 55px;
    }
    &:after {
      width: 12%;
    }
    &:before {
      width: 12%;
    }
  }
`;

export default SlideTitle;
