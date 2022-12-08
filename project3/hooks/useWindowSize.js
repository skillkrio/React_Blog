import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    const cleanUpFunction = () => {
      console.log(
        "This will be called during dependency change,component unmounts and file/sourcecode changed manually by us inside this function will makes this cleanup function to run"
      );
      window.removeEventListener("resize", handleResize);
    };
    return cleanUpFunction;
  }, []);
  return windowSize;
};

export default useWindowSize;
