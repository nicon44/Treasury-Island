// treasury-island-client/src/components/Game.tsx

import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { CameraControls } from "../components/CameraControls";
import { useGameContext } from "../providers/GameProvider";
import { PhaseProps } from "../types/PhaseProps";
import CameraTransition from "./CameraTransition";
import { Grid } from "./Grid";
import Island from "./Island"; // Import the Island component

export const Game = ({ hide, seek }: PhaseProps) => {
  const { rotateTreasure } = useGameContext();

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === "r" || event.key === "R") {
        rotateTreasure();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [rotateTreasure]);

  return (
    <div id="canvas-container">
      <Canvas
        camera={{
          position: [40, 90, 130],
          rotation: [-Math.PI / 3, 0, 0],
        }}
      >
        <Sky
          distance={450000} // Camera distance (default=450000)
          sunPosition={[100, 20, 100]} // Sun position [x, y, z]
          inclination={0} // Sun elevation angle (default=0)
          azimuth={0.25} // Sun azimuth angle (default=0.25)
          turbidity={10} // Sky turbidity (default=10)
          rayleigh={2} // Sky scattering coefficient (default=2)
          mieCoefficient={0.005} // Scattering intensity (default=0.005)
          mieDirectionalG={0.8} // Scattering directional coefficient (default=0.8)
        />
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[5, 5, 5]} />
        <Grid hide={hide} seek={seek} />
        <Island /> {/* Add the Island component here */}
        <CameraControls />
        <CameraTransition />
      </Canvas>
    </div>
  );
};
