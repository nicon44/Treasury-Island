import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { TileProps } from "../../types/TileProps";
import { Sand } from "./Sand";

export const Stone = ({ x, y, hovered, setHovered }: TileProps) => {
  const { scene } = useGLTF("stone.glb");
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  return (
    <group>
      <Sand x={x} y={y} hovered={hovered} setHovered={setHovered} combined />

      {scene && (
        <primitive
          object={clonedScene}
          scale={[25,25,25]}
          position={[0, 5, -5]}
        />
      )}
    </group>
  );
};
