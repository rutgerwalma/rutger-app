import { useState } from "react";
import { Hero } from "./components/Hero";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>rutger.app</title>
        </Helmet>

        <Hero />
      </div>
    </HelmetProvider>
  );
}

export default App;
