import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { Mesh } from "three";

export const Treasure = ({ size = [1, 1], canBeBuried = true }) => {
  const [xSize, ySize] = size;
  const { scene: chest2Glb } = useGLTF("chest-2.glb");
  const chest2 = useMemo(() => chest2Glb.clone(), [chest2Glb]);

  useMemo(() => {
    if (chest2) {
      chest2.traverse((child) => {
        if (child instanceof Mesh) {
          child.material = child.material.clone();
          child.material.transparent = true;
          child.material.opacity = canBeBuried ? 1 : 0.5;
        }
      });
    }
  }, [chest2, canBeBuried]);

  if ((xSize === 1 && ySize === 2) || (xSize === 2 && ySize === 1)) {
    return (
      <group position={[(xSize * 10) / 2 - 5, -5, (ySize * 10) / 2 - 5]}>
        {chest2 && (
          <primitive
            object={chest2}
            scale={[4, 4, 4]}
            position={[0, 5, 0]}
            rotation={[0, xSize === 2 ? -Math.PI / 2 : 0, 0]}
          />
        )}
      </group>
    );
  }
  return (
    <mesh position={[(xSize * 10) / 2 - 5, 2, (ySize * 10) / 2 - 5]}>
      <boxGeometry args={[xSize * 10, 5, ySize * 10]} />

      <meshStandardMaterial
        color={canBeBuried ? "violet" : "red"}
        transparent={true}
        opacity={canBeBuried ? 1 : 0.5}
      />
    </mesh>
  );
};
