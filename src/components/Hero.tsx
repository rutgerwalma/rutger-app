import styled, { keyframes } from "styled-components";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import HeroStarsConfig from "../configs/HeroStarsConfig";

export function Hero() {
  return (
    <HeroBox>
      <Particles options={HeroStarsConfig} init={loadFull} />
      <InfiniteRotate>🤔</InfiniteRotate>
      <Header>rutger.app</Header>
      <Subtitle>
        coming soon...<InfiniteBlink>|</InfiniteBlink>
      </Subtitle>
    </HeroBox>
  );
}

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const InfiniteRotate = styled.div`
  font-size: 2rem;
  animation: ${rotate} 4s linear infinite;
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
`;

const HeroBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
`;
