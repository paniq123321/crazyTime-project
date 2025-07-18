import { useEffect, useState } from "react";

function yesOrNo() {
  const num = Math.floor(Math.random() * 2);
  return !!num;
}
const rows = 12;

const multiplier_arr = [
  500, 250, 100, 50, 25, 10, 5, 10, 25, 50, 100, 250, 500,
];

function findWin(x: number) {
  const index = Math.round((x + 20.4) / 3.4);
  const safeIndex = Math.max(0, Math.min(index, multiplier_arr.length - 1));
  console.log("x:", x.toFixed(2), "index:", safeIndex);
  return multiplier_arr[safeIndex];
}

const triangle = Array.from({ length: rows }, (_, rowIndex) =>
  Array.from({ length: rowIndex + 1 }, () => "·"),
);

export function PachincoComponent() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    let count = 0;
    const intervalId = setInterval(() => {
      setY((prevY) => prevY + 3.7);
      setX((prevX) => prevX + (yesOrNo() ? 1.7 : -1.7));
      count++;
      if (count >= 12) {
        setY((prevY) => prevY + 2.3 - 1 / 16);
        clearInterval(intervalId);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (y >= 45) {
      console.log(findWin(x));
    }
  }, [y]);

  return (
    <div className="flex flex-col h-full justify-center relative">
      <ul className="flex flex-col items-center justify-center gap-[2rem]">
        {triangle.map((row, rowIndex) => (
          <li key={rowIndex} className="flex gap-[3rem] justify-center ">
            {row.map((dot, i) => (
              <span
                key={i}
                className="text-lg leading-none font-bold text-[1.7rem]"
              >
                {dot}
              </span>
            ))}
          </li>
        ))}
      </ul>
      <ul className="flex mx-[2.6rem] ">
        {multiplier_arr.map((item, key) => (
          <li
            key={key}
            className={`flex-1 text-center h-[5rem] flex justify-center items-center ${!key ? "border-l" : ""} border-r border-b bg-black/20 z-10`}
          >
            {item}x
          </li>
        ))}
      </ul>

      <div
        className=" transition-all duration-500 h-[1.5rem] w-[1.5rem] absolute left-0 m-auto right-0 border border-gray-400 bg-white rounded-full"
        style={{
          top: `.5rem`,
          transform: `translate(${x}rem, ${y}rem)`,
        }}
      ></div>
    </div>
  );
}
