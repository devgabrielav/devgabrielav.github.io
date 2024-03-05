import styled from 'styled-components';

export const LinkImgs = styled.img`
  border-radius: 10px;
  height: 40px;
  transition: all 0.4s ease;
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
    180deg, rgba(38, 13, 59) 15%, rgba(25, 12, 41) 60%, 
    rgba(24, 8, 36) 100%);
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(92, 67, 67, 0.1);
  display: flex;
  height: 70px;
  justify-content: space-between;
  text-align: center;
  margin: 0;
  margin-left: -273px;
  margin-top: -32px;
  position: fixed;
  width: 224vh;
  z-index: 2;
`;

export const LinksDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin-left: 10px;
  text-align: center;
  width: 100px;
`;

export const TagsDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  text-align: center;
  width: 400px;
`;

export const Tags = styled.a`
  color: #fff;
`;
