import { useBalanceStore } from "../../../stores";
import { useState } from "react";

export function BetControllerComponent() {
  const [openBet, setOpenbet] = useState(false);

  const setBetValue = useBalanceStore((state) => state.setBetValue);
  const bet_value = useBalanceStore((state) => state.bet_value);
  const balance = useBalanceStore((state) => state.balance);

  const bets = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 250, 500, balance];

  return (
    <div className="absolute right-0 top-0 bottom-0 left-[calc(100%-10rem)] flex flex-col items-center justify-center gap-4">
      <div className="bg-[#1a1a1a99] border-[#fff6] rounded text-center uppercase relative">
        <ul
          className={`absolute right-[calc(50%-3.5rem)] bottom-[100%] rounded-t-md overflow-hidden w-[7rem] ${openBet ? "block" : "hidden"}`}
        >
          {bets.map((item, key) => (
            <li
              key={key + 1}
              className="bg-[#1a1a1a99] hover:text-[#fbdc01] border-b border-[#1a1a1a99] hover:bg-[#1a1a1a99]/80 cursor-pointer "
            >
              <button
                onClick={() => {
                  setOpenbet((prev) => !prev);
                  setBetValue(item);
                }}
              >
                {key === 12 ? "All in" : item}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="text-[#fbdc01] font-bold cursor-pointer px-4 py-2"
          onClick={() => setOpenbet((prev) => !prev)}
        >
          Change bet
        </button>
      </div>
      <div className="p-2 bg-[#1a1a1a99] rounded-full flex flex-col justify-center items-center w-[7rem] border-[1px] border-[#fff6]">
        <span className="text-[.5rem] uppercase font-light">Bet</span>
        <span className="text-[.9rem] text-[#fbdc01]">{bet_value}$</span>
      </div>
    </div>
  );
}
