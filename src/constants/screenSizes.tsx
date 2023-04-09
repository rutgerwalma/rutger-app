import { useMediaQuery } from "react-responsive";

export const isDesktop = useMediaQuery({
  query: "(min-width: 1224px)",
});

export const isTablet = useMediaQuery({
  query: "(max-width: 1224px)",
});

export const isMobile = useMediaQuery({
  query: "(max-width: 786px)",
});

export const isPortrait = useMediaQuery({
  query: "(orientation: portrait)",
});

export const isRetina = useMediaQuery({
  query: "(max-resolution: 300dpi)",
});
