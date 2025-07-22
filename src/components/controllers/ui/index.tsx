import { useEffect } from "react";
import { inputList } from "../../../data";
import { useBalanceStore, useRouletteStore } from "../../../stores";

export function ControllersComponent() {
  const setBet = useBalanceStore((state) => state.setBet);
  const balance = useBalanceStore((state) => state.balance);
  const bet_value = useBalanceStore((state) => state.bet_value);
  const bet = useBalanceStore((state) => state.bet);
  const isSpinning = useRouletteStore((state) => state.isSpinning);

  useEffect(() => {
    console.log(bet);
  }, [bet]);

  return (
    <div className="mx-[2.6rem]">
      <ul className="grid grid-cols-4 gap-4 w-[45rem] text-center">
        {inputList.map(({ option, id, style }) => (
          <li
            className={`${
              id === "cf"
                ? "col-start-3 row-start-1"
                : id === "ch"
                  ? "col-start-4 row-start-1"
                  : ""
            }
                 relative h-[5rem] border text-[3rem] overflow-hidden`}
            key={id}
          >
            <button
              disabled={isSpinning}
              className="cursor-pointer font-bold"
              onClick={() => {
                if (!option || !balance || bet_value > balance) return;
                setBet({ option, id, bet: bet_value });
              }}
            >
              <div className="text-[#fbdc01] font-bold absolute z-[1000] rounded text-[1rem] top-1 right-1 left-[calc(55%)] bg-[#1a1a1a99]  border-[#fff6]">
                {(() => {
                  const found = bet.find((item) => item.id === id);
                  return found ? `${found.bet}$` : null;
                })()}
              </div>
              <span className="relative z-10 leading-[5rem]">{option}</span>
              <div
                className="absolute  top-0 bottom-0 right-0 left-0 opacity-80"
                style={style}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
