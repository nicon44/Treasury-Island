import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { TileProps } from "../../types/TileProps";

export const Stone = ({ x, y, hovered, setHovered }: TileProps) => {
  const { scene } = useGLTF("stone.glb");
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  return (
    <group>
      <mesh
        position={[0, 0.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        onPointerOver={() => setHovered?.(true)}
        onPointerOut={() => setHovered?.(false)}
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={hovered ? "white" : "yellow"} />
      </mesh>

      {/* Border planes */}
      <mesh position={[0, 0.51, 5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10.2, 0.2]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0, 0.51, -5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10.2, 0.2]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-5, 0.51, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <planeGeometry args={[10.2, 0.2]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[5, 0.51, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <planeGeometry args={[10.2, 0.2]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {scene && (
        <primitive
          object={clonedScene}
          scale={[20, 20, 20]}
          position={[0, 1, -5]}
        />
      )}
    </group>
  );
};
