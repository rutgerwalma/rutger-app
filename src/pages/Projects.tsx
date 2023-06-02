import * as React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import rocket from "../assets/rocket-launch.png";

export interface IAppProps {}

export default function Projects(props: IAppProps) {
  const projects = [
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi sit amet ex eleifend, sed efficitur nisi aliquam. Sed feugiat sodales velit vitae faucibus. Maecenas nunc ante, commodo vitae elementum non, feugiat ac enim.",
      image: rocket,
      link: "",
    },
    {
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi sit amet ex eleifend, sed efficitur nisi aliquam. Sed feugiat sodales velit vitae faucibus. Maecenas nunc ante, commodo vitae elementum non, feugiat ac enim.",
      image: rocket,
      link: "",
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi sit amet ex eleifend, sed efficitur nisi aliquam. Sed feugiat sodales velit vitae faucibus. Maecenas nunc ante, commodo vitae elementum non, feugiat ac enim.",
      image: rocket,
      link: "",
    },
    {
      name: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi sit amet ex eleifend, sed efficitur nisi aliquam. Sed feugiat sodales velit vitae faucibus. Maecenas nunc ante, commodo vitae elementum non, feugiat ac enim.",
      image: rocket,
      link: "",
    },
  ];

  return (
    <AppBox>
      <Menu />
      <ContentBox>
        <Title>projects.</Title>
        <Text>some projects i am working on, for now here's some placeholders for you to enjoy.</Text>
      </ContentBox>
      <ProjectsBox>
        {projects.map((project) => {
          return (
            <ProjectTile>
              <ProjectImage src={rocket} alt={project.name} style={{ width: "140px" }} />
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectText>{project.description}</ProjectText>
              <ProjectButton>launch.</ProjectButton>
            </ProjectTile>
          );
        })}
      </ProjectsBox>
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
  padding: 2rem 2rem;
  text-align-center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.33);
  border-radius: 5px;
  z-index: 98;
  position: relative;
`;

const Title = styled.h1`
  font-size: 4rem;
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

const ProjectsBox = styled.div`
  margin: 2rem 2rem;
  padding: 2rem 0;
  text-align-center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.33);
  border-radius: 5px;
  mouse-events: none;
  gap: 1rem;
  z-index: 98;
  position: relative;
  @media (max-width: 1130px) {
    flex-direction: column;
  }
`;

const ProjectTile = styled.div`
  margin 0 1rem;
  padding: 2rem 2rem;
  max-width: 25%;
  text-align-center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.33);
  border-radius: 5px;
  @media (max-width: 1130px) {
    max-width: 100%;
  }
`;

const ProjectImage = styled.img`
  width: 140px;
  margin-bottom: 2rem;
`;

const ProjectTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  user-select: none;
`;

const ProjectText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 1rem;
  user-select: none;
  text-align: center;
`;

const ProjectButton = styled.button`
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
