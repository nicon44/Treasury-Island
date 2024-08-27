import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export const WaterBackground = () => {
  const { scene } = useGLTF("water.glb");
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  return (
    <group>
      <primitive object={clonedScene} scale={[5, 5, 5]} position={[0, 1, 0]} />
      <primitive object={clonedScene.clone()} scale={[5, 5, 5]} position={[-240, 1, 0]} />
      <primitive object={clonedScene.clone()} scale={[5, 5, 5]} position={[240, 1, 0]} />      
      <primitive object={clonedScene.clone()} scale={[5, 5, 5]} position={[0, 1, 240]} />
      <primitive object={clonedScene.clone()} scale={[5, 5, 5]} position={[-240, 1, 240]} />
      <primitive object={clonedScene.clone()} scale={[5, 5, 5]} position={[240, 1, 240]} />
    </group>
  );
};
