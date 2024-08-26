import { Game } from "./components/Game";
import { GameProvider } from "./providers/GameProvider";

function App() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
}

export default App;
