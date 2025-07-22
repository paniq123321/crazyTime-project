import { create } from "zustand";

type ResultItem = {
  ids: string;
  res: string;
  multiplier: number;
};

type RouletteState = {
  gameOpen: string;
  isSpinning: boolean;
  result: ResultItem[];
  setIsSpinning: (value: boolean) => void;
  setResult: (value: ResultItem) => void;
  setLastMultiplier: (value: number) => void;
  setCloseGame: () => void;
};

export const useRouletteStore = create<RouletteState>((set) => ({
  gameOpen: "",
  isSpinning: false,
  result: [
    { ids: "one", res: "1", multiplier: 1 },
    { ids: "five", res: "5", multiplier: 5 },
    { ids: "five", res: "5", multiplier: 5 },
    { ids: "ten", res: "10", multiplier: 10 },
    { ids: "ct", res: "100", multiplier: 120 },
    { ids: "two", res: "2", multiplier: 2 },
    { ids: "ten", res: "10", multiplier: 10 },
    { ids: "two", res: "2", multiplier: 2 },
  ],

  setIsSpinning: (value) => set({ isSpinning: value }),
  setResult: (value) =>
    set((state) => ({
      gameOpen: value.res,
      result: [value, ...state.result],
    })),
  setCloseGame: () =>
    set(() => ({
      gameOpen: "",
    })),

  setLastMultiplier: (value) =>
    set((state) => ({
      result: [
        { ...state.result[0], multiplier: value },
        ...state.result.slice(1),
      ],
    })),
}));
