import styled from 'styled-components';

export const LinkImgs = styled.img`
  border-radius: 10px;
  height: 40px;
  transition: all 0.5s ease;
  transition-delay: 0ms.2;
  width: 40px;
  &:hover,
  &:focus {
    height: 50px;
    width: 50px;
  }
`;

export const Links = styled.a`
  align-items: center;
  display: flex;
  border-radius: 10px;
  height: 50px;
  justify-content: center;
  text-decoration: none;
  width: 50px;
`;

export const HeaderDiv = styled.div`
  align-items: center;
  background: rgb(54,18,83);
  background: linear-gradient(
    180deg, rgba(38, 13, 59, 0.743) 15%, rgba(25, 12, 41, 0.821) 60%, 
    rgba(24, 8, 36) 100%);
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(92, 67, 67, 0.1);
  display: flex;
  height: 70px;
  text-align: center;
  margin: 0;
  margin-left: -40px;
  margin-top: -100px;
  width: 226.3vh;
`;

export const LinksDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin-left: 10px;
  text-align: center;
  width: 100px;
`;
