import * as React from "react";
import styled from "styled-components";
import { useRouteError } from "react-router-dom";
import Menu from "../components/Menu";

export default function Error() {
  return (
    <ErrorBox>
      <Menu />
      <ErrorBody>
        <Title>404.</Title>
        <Subtitle>the content you're looking for is probably somewhere else.</Subtitle>
      </ErrorBody>
    </ErrorBox>
  );
}

const ErrorBox = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ErrorBody = styled.div`
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
