export const Treasure = ({ size = [1, 1] }) => {
  const [xSize, ySize] = size;

  return (
    <mesh position={[(xSize * 10) / 2 - 5, 2, (ySize * 10) / 2 - 5]}>
      <boxGeometry args={[xSize * 10, 5, ySize * 10]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};
