import { ControllersComponent } from "./components/controllers";
import { RouletteComponent } from "./components/roulette";
import { StatisticsComponent } from "./components/statistic";
import { Timeline } from "./timeline";
import crazyTime from "./assets/crazyTime.svg";
import { rouletteData } from "./data";
import { PachincoComponent } from "./components/pachinco";

function App() {
  return (
    <div className="w-[800px] h-[800px] bg-blue-300">
      <PachincoComponent />
    </div>
  );
}
export default App;

// <RouletteComponent rouletteSvg={crazyTime} data={rouletteData} />
// <StatisticsComponent />
// <ControllersComponent />
// <Timeline />
