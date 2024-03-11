import styled from 'styled-components';
import Lottie from 'lottie-react';

type SmoothDivProps = {
  show: boolean;
};

export const Form = styled.form`
  align-items: center;
  border-radius: 2rem;
  border: none;
  display: flex;
  height: 50vh;
  flex-direction: column;
  justify-content: space-around;
  margin-left: -30px;
  padding: .5rem 3.5rem;
  position: relative;
  width: 25vw;
`;

export const IconName = styled.i`
  color: #57565c;
  height: 1.3rem;
  transform: translateY(-50%);
`;

export const IconEmail = styled.i`
  color: #57565c;
  height: 1.3rem;
  position: absolute;
  left: 5.15rem;
  top: 4.1rem;
  transform: translateY(-50%);
`;

export const BtnPrimary = styled.button`
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  font-size: 0.95rem;
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0 3rem;
  border: 0;
  border-radius: 3rem;
  background-image: linear-gradient(131deg, #c340ff, #5b1577, #5b1577, #5b1577);
  background-size: 300% 100%;
  transition: all 0.3s ease-in-out;
  width: 230px;
  &:hover:enabled {
    box-shadow: 0 0.5em 0.5em -0.4em #380f6eb8;
    background-size: 100% 100%;
    transform: translateY(-0.15em);
  }
`;

export const Inputs = styled.input`
  border-radius: 10px;
  border: none;
  box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
  font-family: 'Quicksand', sans-serif;
  height: 27px;
  margin-bottom: 10px;
  padding-left: 30px;
  width: 230px;
  &:focus{
    border: none;
    outline: none;
  }
  &::placeholder{
    color: #b9b5b5;
  }
`;

export const TextArea = styled.textarea`
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: none;
  box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
  font-family: 'Quicksand', sans-serif;
  height: 14vw;
  margin-bottom: 10px;
  padding: 12px;
  width: 240px;
  &:focus{
    border: none;
    outline: none;
  }
  &::placeholder{
    color: #b9b5b5;
  }
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll; 
`;

export const InputWrapper = styled.div`
  border-radius: 10px;
  height: 25px;
  position: relative;
  width: 200px;
`;

export const CheckAnimation = styled(Lottie)`
  height: 200px;
  width: 200px;
`;

export const SmoothDiv = styled.div<SmoothDivProps>`
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.show ? 1 : 0)};
`;

export const Icons = styled.img`
  cursor: pointer;
  height: 50px;
  margin-bottom: -5px;
  transition: all 0.4s ease;
  transition-delay: 0ms.1;
  width: 50px;
  &:hover{
    height: 58px;
    margin-bottom: -13px;
    width: 58px;
  }
`;

export const IconsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 280px;
  margin-right: 20px;
  margin-top: -2vw;
  
`;
