import { useEffect } from "react";
import { useBalanceStore, useRouletteStore, useTimerStore } from "../stores";
import { useTimer } from "../utils/timer.ts";

export const Timeline = () => {
  const timerInterval = useTimerStore((state) => state.interval);
  const setTimer = useTimerStore((state) => state.setTimer);
  const real_timer = useTimerStore((state) => state.timer);
  const setIsSpinning = useRouletteStore((state) => state.setIsSpinning);

  const result = useRouletteStore((state) => state.result);
  const bet = useBalanceStore((state) => state.bet);
  const balance = useBalanceStore((state) => state.balance);
  const setBalance = useBalanceStore((state) => state.setBalance);
  const setClearBets = useBalanceStore((state) => state.setClearBets);

  const { timer } = useTimer(timerInterval);

  useEffect(() => {
    setTimer(real_timer - 1);
    if (real_timer === 0 && result[0].multiplier) {
      setIsSpinning(true);
      setTimer(30);
    }
  }, [timer]);

  useEffect(() => {
    if (!result.length || !bet.length) return;
    const win = bet.filter(({ id }) => id === result[0].ids);
    if (win.length) {
      setBalance(balance + win[0].bet * (parseFloat(win[0].option) + 1));
    }
    setClearBets();
  }, [result]);
};
