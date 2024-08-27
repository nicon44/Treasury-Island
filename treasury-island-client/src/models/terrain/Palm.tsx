import { useGLTF } from "@react-three/drei";
import { TileProps } from "../../types/TileProps";
import { useMemo } from "react";
export const Palm = ({ x, y, hovered, setHovered }: TileProps) => {
  const { scene } = useGLTF("palm.glb");
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
        <meshStandardMaterial color={hovered ? "white" : "green"} />
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
          scale={[0.7, 0.7, 0.7]}
          position={[0, 1, 0]} 
        />
      )}
    </group>
  );
};
