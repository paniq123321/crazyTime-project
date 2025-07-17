import { useEffect } from "react";
import { useRouletteStore } from "../stores";
import { useTimerStore } from "../stores/use-timer-store.ts";
import { useTimer } from "../utils/timer.ts";

export const Timeline = () => {
  const timerInterval = useTimerStore((state) => state.interval);
  const setTimer = useTimerStore((state) => state.setTimer);
  const real_timer = useTimerStore((state) => state.timer);
  const setIsSpinning = useRouletteStore((state) => state.setIsSpinning);

  const { timer } = useTimer(timerInterval);

  useEffect(() => {
    setTimer(real_timer - 1);
    if (real_timer === 0) {
      setIsSpinning(true);
      setTimer(30);
    }
  }, [timer]);
};
