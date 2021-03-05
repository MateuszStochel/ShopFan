import React from "react";
import styled from "styled-components";
import image from "./assets/Images/category.jpg";
import image2 from "./assets/Images/category3.jpg";
import image3 from "./assets/Images/category7.jpg";
import image4 from "./assets/Images/category5.jpg";

const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 2000px;
  margin: 0 auto;
`;
const Category = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  flex-basis: calc(50% - 20px);
  margin: 10px;
  justify-content: space-between;
  &:nth-child(4),
  :nth-child(5) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    height: 150px;
  }
  ${({ theme }) => theme.mq.sm} {
    height: 400px;
    &:nth-child(4),
    :nth-child(5) {
      height: 250px;
    }
  }
  ${({ theme }) => theme.mq.lg} {
    height: 600px;

    &:nth-child(4),
    :nth-child(5) {
      height: 350px;
    }
  }
  ${({ theme }) => theme.mq.xxl} {
    height: 610px;
    flex-basis: calc(30% - 20px);
    &:nth-child(4),
    :nth-child(5) {
      height: 300px;
      flex-basis: calc(40% - 20px);
    }
  }
`;
const CategoryLink = styled.div`
  margin-top: 10px;
  height: 100%;
  position: relative;
  cursor: pointer;
  &: hover;
`;
const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${({ theme }) => theme.mq.lg} {
  }
`;
const CategoryTitle = styled.h1`
  text-align: center;
  position: relative;
  font-size: 40px;
  width: 100%;
  margin: 20px 0;
  ${({ theme }) => theme.mq.sm} {
    font-size: 50px;
  }
  ${({ theme }) => theme.mq.lg} {
    font-size: 60px;
  }
`;
const CategoryButton = styled.button`
  position: absolute;
  transform: translate(-50%, -50%);
  bottom: 5%;
  font-size: 18px;
  background-color: ${({ theme }) => theme.blackTransparent};
  color: white;
  padding: 10px 20px;
  left: 50%;
  ${({ theme }) => theme.mq.sm} {
    font-size: 20px;
    padding: 12px 24px;
  }
`;

const Categories = () => {
  return (
    <CategoriesWrapper>
      <CategoryTitle>Trending</CategoryTitle>
      <Category>
        <CategoryLink>
          <CategoryImage src={image} alt="sth" />
          <CategoryButton>Hoodies</CategoryButton>
        </CategoryLink>
      </Category>
      <Category>
        <CategoryLink>
          <CategoryImage src={image2} alt="sth" />
          <CategoryButton>T-shirts</CategoryButton>
        </CategoryLink>
      </Category>
      <Category>
        <CategoryLink>
          <CategoryImage src={image3} alt="sth" />
          <CategoryButton>T-shirts</CategoryButton>
        </CategoryLink>
        <CategoryLink>
          <CategoryImage src={image4} alt="sth" />
          <CategoryButton>T-shirts</CategoryButton>
        </CategoryLink>
      </Category>
    </CategoriesWrapper>
  );
};

export default Categories;
