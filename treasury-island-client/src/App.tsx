import { ChakraProvider } from "@chakra-ui/react";
import { Game } from "./components/Game";
import { Sidebar } from "./components/Sidebar";
import { GameProvider } from "./providers/GameProvider";

function App() {
  return (
    <ChakraProvider>
      <GameProvider>
        <Sidebar />
        <Game />
      </GameProvider>
    </ChakraProvider>
  );
}

export default App;
