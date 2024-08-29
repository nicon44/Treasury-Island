import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { CameraControls } from "../components/CameraControls";
import { useGameContext } from "../providers/GameProvider";
import { PhaseProps } from "../types/PhaseProps";
import { Grid } from "./Grid";
import CameraTransition from "./CameraTransition"; // Import the new component

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
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[5, 5, 5]} />
        <Grid hide={hide} seek={seek} />
        <CameraControls />
        <CameraTransition />
      </Canvas>
    </div>
  );
};
