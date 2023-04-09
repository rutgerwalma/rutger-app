import * as React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
export interface IAppProps {}

export default function CurriculumVitae(props: IAppProps) {
  return (
    <AppBox>
      <Menu />
      <ContentBox>
        <Title>curriculum vitae.</Title>
        <Text>
          click the button below to download my <FeaturedText>curriculum vitae.</FeaturedText>
        </Text>

        <DownloadButton>download.</DownloadButton>
      </ContentBox>
    </AppBox>
  );
}

const AppBox = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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
  position: relative;
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

const DownloadButton = styled.button.attrs({ onClick: () => window.open("/curriculum-vitae.pdf") })`
  margin-top: 1rem;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1.25rem;
  padding: 0.5rem 3rem;
  color: #fff;
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 3px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    linear-gradient(101deg, rgba(255, 48, 0, 0.75), rgba(86, 67, 253, 0.75));
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #000 inset;
`;
