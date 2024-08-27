import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { TileProps } from "../../types/TileProps";

export const Sand = ({ x, y, hovered, setHovered }: TileProps) => {
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
      {/* 
      <mesh
        position={[0, 0.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        onPointerOver={() => setHovered?.(true)}
        onPointerOut={() => setHovered?.(false)}
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={hovered ? "white" : "yellow"} />
      </mesh>

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
      </mesh> */}
    </group>
  );
};
