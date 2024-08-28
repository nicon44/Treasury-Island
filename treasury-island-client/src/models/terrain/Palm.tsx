import { useGLTF } from "@react-three/drei";
import { TileProps } from "../../types/TileProps";
import { useMemo } from "react";
import { Sand } from "./Sand";
export const Palm = ({ x, y, hovered, setHovered }: TileProps) => {
  const { scene } = useGLTF("palm.glb");
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  
  return (
    <group>
      <Sand x={x} y={y} hovered={hovered} setHovered={setHovered} />

      {scene && (
        <primitive
          object={clonedScene}
          scale={[3,3,3]}
          position={[0, 2, 0]} 
        />
      )}
    </group>
  );
};
