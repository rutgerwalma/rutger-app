// Typescript Menu component

import { isDesktop } from "../constants/screenSizes";
import NavBar from "./NavBar";
import Burger from "./Burger";
import { useMediaQuery } from "react-responsive";

export default function Menu() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return <>{isDesktop ? <NavBar /> : <Burger />}</>;
}
