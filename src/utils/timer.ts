import { useEffect, useState } from "react";

export const getRealTime = (time: number, start: number) => {
  const now = Date.now();
  const diff = Math.round((now - start) / 1000);
  return time - diff;
};

export const useTimer = (interval: number) => {
  const [timer, setTimer] = useState(interval);
  useEffect(() => {
    const startTime = Date.now();

    const updateTimer = () => {
      const realTime = getRealTime(interval, startTime);
      setTimer(realTime);
    };

    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, [interval]);

  return { timer };
};
