import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import StarryBackgroundConfig from "../configs/StarryBackgroundConfig";

export function StarryBackground() {
  return <Particles options={StarryBackgroundConfig} init={loadFull} style={{ position: "fixed", zIndex: "10" }} />;
}
