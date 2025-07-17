import { ControllersComponent } from "./components/controllers";
import { RouletteComponent } from "./components/roulette";
import { StatisticsComponent } from "./components/statistic";
import { Timeline } from "./timeline";
import crazyTime from "./assets/crazyTime.svg";
import { rouletteData } from "./data";

function App() {
  return (
    <div className="w-[800px] h-[800px] bg-blue-300">
      <RouletteComponent rouletteSvg={crazyTime} data={rouletteData} />
      <StatisticsComponent />
      <ControllersComponent />
      <Timeline />
    </div>
  );
}
export default App;
