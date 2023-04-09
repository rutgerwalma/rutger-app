import * as React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
export interface IAppProps {}

export default function About(props: IAppProps) {
  return (
    <AppBox>
      <Menu />
      <ContentBox>
        <Title>about.</Title>
        <Text>
          just figuring out what to put here, content writing is not my speciality. this portfolio app is built in{" "}
          <FeaturedText>react</FeaturedText> with <FeaturedText>typescript</FeaturedText> along with any fun libaries i come across. also{" "}
          <FeaturedText>vite</FeaturedText> was used as module bundler and starter boilerplate instead of create-react-app.
        </Text>
        <Text>
          the projects page is eventually for showing off my other projects (if i ever manage to properly finish one). as always, this is
          still a work in progress, come back in a few months and chances are this will look a lot different.
        </Text>
      </ContentBox>
    </AppBox>
  );
}

const AppBox = styled.div`
  height: 100%;
  width: 100%;
`;

const ContentBox = styled.div`
  margin: 2rem 2rem;
  height: fit-content;
  padding: 2rem 2rem;
  text-align-center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.33);
  border-radius: 5px;
  z-index: 98;
`;

const Title = styled.h1`
  font-size: 4rem;
  padding: 2rem 0;
  font-weight: 700;
  margin: 0;
  user-select: none;
`;

const Text = styled.p`
  padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  user-select: none;
`;

const FeaturedText = styled.span`
  background: linear-gradient(90deg, rgba(255, 48, 0, 0.75) 0%, rgba(86, 67, 253, 0.75) 100%);
  padding: 0 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  user-select: none;
`;
