import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { Mesh } from "three";

export const Treasure = ({ size = [1, 1], canBeBuried = true }) => {
  const [xSize, ySize] = size;
  const { scene: chest3Glb } = useGLTF("chest-3.glb");
  const chest3 = useMemo(() => chest3Glb.clone(), [chest3Glb]);
  const { scene: chest2Glb } = useGLTF("chest-2.glb");
  const chest2 = useMemo(() => chest2Glb.clone(), [chest2Glb]);
  const { scene: chest1Glb } = useGLTF("chest-1.glb");
  const chest1 = useMemo(() => chest1Glb.clone(), [chest1Glb]);

  useMemo(() => {
    if (chest3) {
      chest3.traverse((child) => {
        if (child instanceof Mesh) {
          child.material = child.material.clone();
          child.material.transparent = true;
          child.material.opacity = canBeBuried ? 1 : 0.5;
        }
      });
    }
  }, [chest3, canBeBuried]);
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
  useMemo(() => {
    if (chest1) {
      chest1.traverse((child) => {
        if (child instanceof Mesh) {
          child.material = child.material.clone();
          child.material.transparent = true;
          child.material.opacity = canBeBuried ? 1 : 0.5;
        }
      });
    }
  }, [chest1, canBeBuried]);
  
  //logic for chest2
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

  // New logic for handling chest1 and chest3
  if ((xSize === 1 && ySize === 1) || (xSize === 1 && ySize === 1)) {
    return (
      <group position={[(xSize * 10) / 2 - 5, -5, (ySize * 10) / 2 - 5]}>
        {chest1 && (
          <primitive
            object={chest1}
            scale={[2, 5, 2.8]}
            position={[0, 6, 0]}
            rotation={[0, xSize === 1 ? -Math.PI / 2 : 0, 0]}
          />
        )}
      </group>
    );
  }

  if ((xSize === 1 && ySize === 4) || (xSize === 4 && ySize === 1)) {
    return (
      <group position={[(xSize * 25) / 2 - 5, -5, (ySize * 3) / 2 - 5]}>
        {chest3 && (
          <primitive
            object={chest3}
            scale={[5, 7, 4]}
            position={[2.5, 6, 0]}
            rotation={[0, xSize === 4 ? -Math.PI / 2 : 0, 0]}
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
