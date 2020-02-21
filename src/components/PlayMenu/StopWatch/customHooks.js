import { useState, useEffect } from "react";

const useTimer = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 0.1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (seconds >= 60) {
      setMinutes(prevMinutes => prevMinutes + 1);
      setSeconds(0);
    }
  }, [seconds]);

  return {
    seconds,
    setSeconds,
    minutes,
    setMinutes,
    isRunning,
    setIsRunning
  };
};

export const useStopWatch = () => {
  const { seconds, minutes, isRunning, setIsRunning } = useTimer();
  return {
    seconds: seconds.toFixed(),
    minutes: minutes,
    isRunning: isRunning,
    stopTimer: () => setIsRunning(false),
    startTimer: () => setIsRunning(true)
  };
};

export const useQuit = () => {
  const [isQuit, setIsQuit] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  return {
    isQuit: isQuit,
    isConfirm: isConfirm,
    setIsQuit: () => setIsQuit(true),
    accept: () => setIsConfirm(true),
    decline: () => setIsQuit(false)
  };
};

const getWindowDimensions = () => {
  const { innerWidth: width } = window;
  return {
    width
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

// export const useMobileDimensions = () => {
//   const [mobileDimensions, setMobileDimensions] = useState(false);
//   const { width } = useWindowDimensions();
//   width < 796 ? setMobileDimensions(true) : setMobileDimensions(false);

//   return mobileDimensions;
// };
