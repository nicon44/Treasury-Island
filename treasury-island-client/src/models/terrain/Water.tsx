import { TileProps } from "../../types/TileProps";


export const Water = ({ x, y }: TileProps) => {
    return (
      <group>
        {/* Sand tile */}
        <mesh position={[0, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="blue" />
        </mesh>
        
        {/* Border planes */}
        {/* Top border */}
        <mesh position={[0, 0.51, 5]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10.2, 0.2]} />
          <meshStandardMaterial color="black" />
        </mesh>
        {/* Bottom border */}
        <mesh position={[0, 0.51, -5]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10.2, 0.2]} />
          <meshStandardMaterial color="black" />
        </mesh>
        {/* Left border */}
        <mesh position={[-5, 0.51, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <planeGeometry args={[10.2, 0.2]} />
          <meshStandardMaterial color="black" />
        </mesh>
        {/* Right border */}
        <mesh position={[5, 0.51, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <planeGeometry args={[10.2, 0.2]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </group>
    );
  };
  