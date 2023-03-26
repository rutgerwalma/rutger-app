import { useState } from "react";
import { Hero } from "./components/Hero";
import { Helmet, HelmetProvider } from "react-helmet-async";
import styled from "styled-components";

function App() {
  return (
    <HelmetProvider>
      <AppBox>
        <Helmet>
          <title>rutger.app</title>
        </Helmet>
        <Hero />
      </AppBox>
    </HelmetProvider>
  );
}

export default App;

const AppBox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
`;
