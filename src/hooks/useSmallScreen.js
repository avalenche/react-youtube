import { useState, useEffect } from "react";
const BREAKPOINT = 568;

export const useIsSmallScreen = () => {
  const [isSmall, setIsSmall] = useState(window.innerWidth <= BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmall;
};
