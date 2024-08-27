export const Treasure = ({ size = [1, 1], canBeBuried = true }) => {
  const [xSize, ySize] = size;

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
