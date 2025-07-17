import { inputList } from "../../../data";

export function ControllersComponent() {
  return (
    <div className="mx-[2.6rem]">
      <ul className="grid grid-cols-4 gap-4 w-[45rem] text-center">
        {inputList.map(({ option, id, style }) => (
          <li
            className={`${
              id === "ch"
                ? "col-start-3 row-start-1"
                : id === "cf"
                  ? "col-start-4 row-start-1"
                  : ""
            }
                 relative h-[5rem] border leading-[5rem] text-[3rem] font-bold cursor-pointer overflow-hidden`}
            key={id}
          >
            <span className="relative z-10">{option}</span>
            <div
              className="absolute  top-0 bottom-0 right-0 left-0 opacity-80"
              style={style}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
