import { SpotLight, useGLTF, useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { MeshBasicMaterial } from "three";
import { SandProps } from "../../types/TileProps";

export const Sand = ({
  x,
  y,
  hovered,
  setHovered,
  combined = false,
  hit = false,
  miss = false,
}: SandProps) => {
  const { scene } = useGLTF("grass.glb");
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  const hitTexture = useTexture("hit.png");
  const missTexture = useTexture("miss.png");

  // Create the material based on the hit or miss state
  const overlayMaterial = useMemo(() => {
    if (hit) {
      return new MeshBasicMaterial({ map: hitTexture, transparent: true });
    }
    if (miss) {
      return new MeshBasicMaterial({ map: missTexture, transparent: true });
    }
    return null;
  }, [hit, miss, hitTexture, missTexture]);

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

      {/* Add the overlay plane */}
      {overlayMaterial && (
        <mesh position={[0, 4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[7, 7]} />
          <primitive object={overlayMaterial} attach="material" />
        </mesh>
      )}
    </group>
  );
};
