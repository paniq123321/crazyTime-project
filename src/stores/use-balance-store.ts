import { create } from "zustand";

interface BetType {
  id: string;
  option: string;
  bet: string;
}

type RouletteState = {
  balance: string;
  bet: BetType[];
  setBalance: (value: string) => void;
  setBet: (value: BetType) => void;
  setRemoveBet: (value: string) => void;
};

export const useBalanceStore = create<RouletteState>((set) => ({
  balance: "1000$",
  bet: [],

  setBalance: (value) => set({ balance: value }),

  setBet: (newBet) =>
    set((state) => {
      const existingIndex = state.bet.findIndex((b) => b.id === newBet.id);
      if (existingIndex !== -1) {
        const updatedBet = [...state.bet];
        updatedBet[existingIndex] = {
          ...updatedBet[existingIndex],
          ...newBet,
        };
        return { bet: updatedBet };
      }

      return { bet: [...state.bet, newBet] };
    }),

  setRemoveBet: (idToRemove) =>
    set((state) => ({
      bet: state.bet.filter(({ id }) => id !== idToRemove),
    })),
}));
