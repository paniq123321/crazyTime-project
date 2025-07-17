import { create } from "zustand";

interface BetType {
  id: string;
  option: string;
  bet: number;
}

type RouletteState = {
  balance: number;
  bet: BetType[];
  all_bet: number;
  setBalance: (value: number) => void;
  setBet: (value: BetType) => void;
  setRemoveBet: (value: string) => void;
  setClearBets: () => void;
};

export const useBalanceStore = create<RouletteState>((set) => ({
  balance: 1000,
  bet: [],
  all_bet: 0,

  setBalance: (value) => set({ balance: value }),

  setBet: (newBet) =>
    set((state) => {
      state.all_bet += newBet.bet;
      const existingIndex = state.bet.findIndex((b) => b.id === newBet.id);
      if (existingIndex !== -1) {
        const updatedBet = [...state.bet];
        updatedBet[existingIndex] = {
          ...updatedBet[existingIndex],
          bet: updatedBet[existingIndex].bet + newBet.bet,
        };
        return { bet: updatedBet };
      }

      return { bet: [...state.bet, newBet] };
    }),

  setRemoveBet: (idToRemove) =>
    set((state) => ({
      bet: state.bet.filter(({ id }) => id !== idToRemove),
    })),
  setClearBets: () => {
    set(() => ({
      all_bet: 0,
      bet: [],
    }));
  },
}));
