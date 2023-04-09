import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import CurriculumVitae from "./pages/CurriculumVitae";
import Error from "./pages/Error";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { StarryBackground } from "./components/StarryBackground";
import Menu from "./components/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/cv",
    element: <CurriculumVitae />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StarryBackground />
    <HelmetProvider>
      <Helmet>
        <title>rutger.app</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/png/ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Helmet>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
