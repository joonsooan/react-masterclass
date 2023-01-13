import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Emoji = styled.span`
  font-size: 40px;
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 30px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1.5s linear infinite;
  ${Emoji}:hover {
    font-size: 80px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">😊</Emoji>
      </Box>
      <Emoji>❤️</Emoji>
    </Wrapper>
  );
}

export default App;
