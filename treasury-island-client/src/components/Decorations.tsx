import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export const Decorations = () => {
  const { scene: gltfGalleon } = useGLTF("galleon.glb");
  //   const { scene: gltfBarrell } = useGLTF("barrell.glb");
  const { scene: gltfSloop } = useGLTF("sloop.glb");
  const galleon = useMemo(() => gltfGalleon.clone(), [gltfGalleon]);
  const sloop = useMemo(() => gltfSloop.clone(), [gltfSloop]);
  //   const barrell1 = useMemo(() => gltfBarrell.clone(), [gltfBarrell]);
  //   const barrell2 = useMemo(() => gltfBarrell.clone(), [gltfBarrell]);
  //   const barrell3 = useMemo(() => gltfBarrell.clone(), [gltfBarrell]);
  return (
    <group>
      {galleon && (
        <primitive
          object={galleon}
          scale={[2, 2, 2]}
          rotation={[0, -Math.PI / 3, 0]}
          position={[-10, -2.5, 30]}
        />
      )}
      {sloop && (
        <primitive
          object={sloop}
          scale={[2, 2, 2]}
          rotation={[0, Math.PI / 3, 0]}
          position={[150, -1, 50]}
        />
      )}
      {/* {barrell1 && (
        <primitive
          object={barrell1}
          scale={[3, 3, 3]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          position={[40, 2, 40]}
        />
      )} */}
    </group>
  );
};
