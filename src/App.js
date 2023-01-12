import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius:0px;
  } 
  50% {
    transform: rotate(180deg);
    border-radius:50px;
  }
  100% {
    transform: rotate(0deg);
    border-radius:0px;
  }
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 2s linear infinite;
  span {
    font-size: 40px;
    &:hover {
      font-size: 70px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😊</span>
      </Box>
    </Wrapper>
  );
}

export default App;
