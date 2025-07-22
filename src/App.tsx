import { BetControllerComponent } from "./components/betController";
import { ControllersComponent } from "./components/controllers";
import { RouletteComponent } from "./components/roulette";
import { StatisticsComponent } from "./components/statistic";
import { Timeline } from "./timeline";
import crazyTime from "./assets/crazyTime.svg";
import { rouletteData } from "./data";

function App() {
  return (
    <div className="w-[800px] h-[800px] bg-blue-300 relative">
      <RouletteComponent rouletteSvg={crazyTime} data={rouletteData} />
      <StatisticsComponent />
      <ControllersComponent />
      <BetControllerComponent />
      <Timeline />
    </div>
  );
}
export default App;

// <RouletteComponent rouletteSvg={crazyTime} data={rouletteData} />
// <StatisticsComponent />
// <ControllersComponent />
// <Timeline />

// {gameOpen === "pachinco" ? <PachincoComponent /> : null}
