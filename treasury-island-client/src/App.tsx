import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { ControlsHelp } from "./components/ControlsHelp";
import { Game } from "./components/Game";
import { Sidebar } from "./components/Sidebar";
import Lobby from "./pages/Lobby";
import { GameProvider } from "./providers/GameProvider";
import { Winner } from "./components/Winner";

function App() {
  return (
    <ChakraProvider>
      <GameProvider>
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route
            path="/hide"
            element={
              <>
                <Sidebar hide />
                <Game hide />
                <Winner />
                <ControlsHelp hide />
              </>
            }
          />
          <Route
            path="/seek"
            element={
              <>
                <Sidebar seek />
                <Game seek />
                <Winner />
                <ControlsHelp seek />
              </>
            }
          />
        </Routes>
      </GameProvider>
    </ChakraProvider>
  );
}

export default App;
