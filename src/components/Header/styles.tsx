import styled from 'styled-components';

export const HeaderDiv = styled.header`
  align-items: center;
  background: rgb(33, 8, 41);
  border-bottom: 2px solid rgb(126, 83, 156);
  box-shadow: 0 15px 40px rgba(92, 67, 67, 0.1);
  display: flex;
  height: 70px;
  justify-content: space-between;
  text-align: center;
  left: 0;
  right: 0;
  margin: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 4;
  transition: background 0.5s ease;
  &.scrolled {
    background: rgb(27, 10, 39);
  }
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

export const LinksDiv = styled.div`
  align-items: center;
  display: flex;
  height: 120px;
  justify-content: space-around;
  margin-right: 20px;
  text-align: center;
  width: 100px;
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

export const LinkImgs = styled.img`
  border-radius: 10px;
  height: 40px;
  transition: all 0.4s ease;
  transition-delay: 0ms.1;
  width: 40px;
  &:hover,
  &:focus {
    height: 50px;
    width: 50px;
  }
`;
