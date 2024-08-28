import { SpotLight, useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { TileProps } from "../../types/TileProps";

export const Sand = ({ x, y, hovered, setHovered, combined = false }: TileProps) => {
  const { scene } = useGLTF("grass.glb");
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  return (
    <group>
      {scene && (
        <primitive
          object={clonedScene}
          scale={[3, 3, 3]}
          position={[0, 1, 0]}
          onPointerOver={() => setHovered?.(true)}
          onPointerOut={() => setHovered?.(false)}
        />
      )}
      {!combined && hovered && (
        <SpotLight
          intensity={400}
          angle={0.4}
          position={[0, 15, 0]}
          distance={15}
          decay={2}
          penumbra={0.5}
          castShadow
          target={clonedScene}
        />
      )}
    </group>
  );
};
