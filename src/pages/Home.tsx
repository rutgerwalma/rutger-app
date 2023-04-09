import Menu from "../components/Menu";
import styled, { keyframes } from "styled-components";

function App() {
  return (
    <AppBox>
      <Menu />
      <HeroBox>
        <InfiniteRotate>🚀</InfiniteRotate>
        <Title>rutger.app</Title>
        <Subtitle>
          front-end development<InfiniteBlink>|</InfiniteBlink>
        </Subtitle>
      </HeroBox>
    </AppBox>
  );
}

export default App;

const AppBox = styled.div`
  height: 100%;
  width: 100%;
`;

const rotate = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const InfiniteRotate = styled.div`
  font-size: 2rem;
  animation: ${rotate} 6s linear infinite;
  user-select: none;
  transform: scale(-1, 1);
`;

const blink = keyframes`
  0% {
    opacity: 0;
  }
`;

const InfiniteBlink = styled.div`
  font-size: 2rem;
  display: inline-block;
  animation: ${blink} 1.5s steps(2) infinite;

  user-select: none;
`;

const HeroBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  text-align: center;
  height: 90vh;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  user-select: none;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  user-select: none;
`;
