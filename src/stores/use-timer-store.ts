import { create } from "zustand";

type TimerState = {
  timer: number;
  interval: number;
  setTimer: (value: number) => void;
  setInterval: (value: number) => void;
};

export const useTimerStore = create<TimerState>((set) => ({
  timer: 30,
  interval: 30,
  setTimer: (time) => {
    set({ timer: time });
  },
  setInterval: (time) => {
    set({ interval: time });
  },
}));
