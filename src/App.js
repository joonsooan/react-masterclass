import styled, { keyframes } from "styled-components";

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 30px;
`;

const Emoji = styled.span`
  font-size: 40px;
`;

const Box1 = styled(Box)`
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1.5s linear infinite;
  ${Emoji}:hover {
    font-size: 80px;
  }

  h1 {
    color: white;
    &:hover {
      color: black;
    }
  }
`;

const Box2 = styled(Box)`
  background-color: ${(props) => props.bgColor};
`;

const Input = styled.input.attrs({ required: true, maxLength: 10 })`
  background-color: blanchedalmond;
`;

function App() {
  return (
    <Wrapper>
      <Box1>
        <Emoji>😊</Emoji>
      </Box1>
      <Box1>
        <h1>Hello</h1>
      </Box1>
      <Emoji>❤️</Emoji>
      <Box2 bgColor="cornflowerblue"></Box2>
      <Input />
    </Wrapper>
  );
}

export default App;
