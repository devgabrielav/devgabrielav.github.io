import styled from 'styled-components';

export const TechBox = styled.div`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: center;
  margin-bottom: 100px;
`;

export const Logos = styled.img`
  height: 40px;
  width: 40px;
  transition: all 0.4s ease;
  transition-delay: 0ms.2;
  &:hover {
    height: 50px;
    width: 50px;
  }
`;

export const TooltipText = styled.span`
  visibility: hidden;
  background-color: #6329c0;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  width: 100px;
  bottom: 100%;
  left: 50%;
  margin-left: -50px;
  margin-bottom: 30px;
`;

export const Tooltip = styled.div`
  align-items: center;
  display: flex;
  height: 20px;
  justify-content: center;
  margin-right: 30px;
  position: relative;
  text-align: center;
  width: 20px;
  &:hover ${TooltipText} {
      visibility: visible;
  }
`;
