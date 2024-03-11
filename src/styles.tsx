import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const MainDiv = styled.div`
  align-items: center;
  background: rgba(90, 86, 86, 0.06);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  height: 400px;
  justify-content: space-evenly;
  margin: auto;
  margin-top: 100px;
  width: 73vw;
`;

export const SlideInDivs = styled.div`
  animation: ${slideIn} 0.5s forwards;
  animation-delay: calc(1s * var(--i));
  opacity: var(--animate);
  transform: translateX(calc(-100% * (1 - var(--animate))));
`;
