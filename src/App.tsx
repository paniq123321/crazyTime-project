import { ControllersComponent } from "./components/controllers";
import { RouletteComponent } from "./components/roulette";
import { StatisticsComponent } from "./components/statistic";
import { useRouletteStore } from "./stores";
import { Timeline } from "./timeline";
import crazyTime from "./assets/crazyTime.svg";
import { rouletteData } from "./data";
import { PachincoComponent } from "./components/pachinco";

function App() {
  const gameOpen = useRouletteStore((state) => state.gameOpen);
  return (
    <div className="w-[800px] h-[800px] bg-blue-300 relative">
      <RouletteComponent rouletteSvg={crazyTime} data={rouletteData} />
      <StatisticsComponent />
      <ControllersComponent />
      {gameOpen === "pachinco" ? <PachincoComponent /> : null}
      <Timeline />
    </div>
  );
}
export default App;

// <RouletteComponent rouletteSvg={crazyTime} data={rouletteData} />
// <StatisticsComponent />
// <ControllersComponent />
// <Timeline />
