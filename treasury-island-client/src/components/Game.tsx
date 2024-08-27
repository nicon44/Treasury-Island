import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { CameraControls } from "../components/CameraControls";
import { useGameContext } from "../providers/GameProvider";
import { Grid } from "./Grid";

export const Game = () => {
  const { setTreasureToBury, rotateTreasure } = useGameContext();

  useEffect(() => {
    setTreasureToBury({
      xSize: 4,
      ySize: 1,
    });
    const handleKeyDown = (event: { key: string; }) => {
      if (event.key === "r" || event.key === "R") {
        console.log("Rotating");
        rotateTreasure();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="canvas-container">
      <Canvas
        camera={{
          position: [0, 80, 10], // Position the camera above and slightly back
          rotation: [-Math.PI / 3, 0, 0], // Rotate the camera to look down at an angle
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[5, 5, 5]} />
        <Grid />
        <CameraControls />
      </Canvas>
    </div>
  );
};
