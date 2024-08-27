import { TileProps } from "../../types/TileProps";


export const Sand = ({ x, y, hovered, setHovered }: TileProps) => {
  return (
    <group>
      {/* Sand tile */}
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
    </group>
  );
};
