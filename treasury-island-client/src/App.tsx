import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Game } from "./components/Game";
import { Sidebar } from "./components/Sidebar";
import Lobby from "./pages/Lobby";
import { GameProvider } from "./providers/GameProvider";

function App() {
  return (
    <ChakraProvider>
      <GameProvider>
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route
            path="/room"
            element={
              <>
                <Sidebar />
                <Game />
              </>
            }
          />
          <Route
            path="/game"
            element={
              <>
                <Sidebar />
                <Game />
              </>
            }
          />
        </Routes>
      </GameProvider>
    </ChakraProvider>
  );
}

export default App;
