import { create } from "zustand";

type ResultItem = {
  ids: string;
  res: string;
  multiplier: number;
};

type RouletteState = {
  isSpinning: boolean;
  result: ResultItem[];
  setIsSpinning: (value: boolean) => void;
  setResult: (value: ResultItem) => void;
};

export const useRouletteStore = create<RouletteState>((set) => ({
  isSpinning: false,
  result: [
    { ids: "one", res: "1", multiplier: 1 },
    { ids: "five", res: "5", multiplier: 5 },
    { ids: "five", res: "5", multiplier: 5 },
    { ids: "ten", res: "10", multiplier: 10 },
    { ids: "ct", res: "crazy time", multiplier: 120 },
    { ids: "two", res: "2", multiplier: 2 },
    { ids: "ten", res: "10", multiplier: 10 },
    { ids: "two", res: "2", multiplier: 2 },
  ],

  setIsSpinning: (value) => set({ isSpinning: value }),
  setResult: (value) => set((state) => ({ result: [value, ...state.result] })),
}));
