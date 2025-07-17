import { create } from "zustand";

type ResultItem = {
  ids: string;
  res: string;
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
    { ids: "one", res: "1" },
    { ids: "five", res: "5" },
    { ids: "five", res: "5" },
    { ids: "ten", res: "10" },
    { ids: "ct", res: "crazy time" },
    { ids: "two", res: "2" },
    { ids: "ten", res: "10" },
    { ids: "two", res: "2" },
  ],

  setIsSpinning: (value) => set({ isSpinning: value }),
  setResult: (value) => set((state) => ({ result: [value, ...state.result] })),
}));
