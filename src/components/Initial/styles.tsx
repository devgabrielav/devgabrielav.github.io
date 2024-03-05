import styled, { keyframes } from 'styled-components';

export const backglow1 = keyframes`
  0%
  {
    transform: translate(10%, 10%) scale(1);
    opacity:0.4;
  }
  
  25%
  {
    transform: translate(-10%, 10%) scale(3);
    opacity:0.4;
  }
  
  50%
  {
    transform: translate(-10%, -10%) scale(1.2);
    opacity:0.7;
  }
  
  75%
  {
    transform: translate(10%, -10%) scale(1.1);
    opacity:0.1;
  }
  
  100%
  {
    transform: translate(10%, 10%) scale(1);
    opacity:0.4;
  }
`;

export const backglow2 = keyframes`
  0%
  {
    transform: translate(-10%, -10%) scale(1);
    opacity:0.4;
  }
  
  25%
  {
    transform: translate(10%, -10%) scale(0.8);
    opacity:0.4;
  }
  
  50%
  {
    transform: translate(10%, 10%) scale(3);
    opacity:0.7;
  }
  
  75%
  {
    transform: translate(-10%, 10%) scale(1.1);
    opacity:0.1;
  }
  
  100%
  {
    transform: translate(-10%, -10%) scale(1);
    opacity:0.4;
  }
`;

export const InitialTitle = styled.h2`
  color: white;
`;

export const Selfie = styled.img`
  border-radius: 20px;
  height: 290px;
  width: 220px;
`;

export const InitialBox = styled.div`
  align-items: center;
  display: flex;
  height: 320px;
  justify-content: space-around;
  margin: auto;
  margin-top: 100px;
  width: 800px;
  &::before, &::after{
    position: absolute;
    content : "";
    height:30%;
    width:30%;
    opacity:0.03;
    filter: blur(170px);
  }
  &::after{
    background-color: #279eff;
    z-index: -1;
    animation : ${backglow2} 25s ease infinite;
  }
  &::before{
    background-color:#ff0072;
    z-index: -2;
    animation : ${backglow1} 16s ease infinite;
  }
`;
