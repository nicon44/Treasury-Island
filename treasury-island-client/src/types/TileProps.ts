export interface TileProps {
  x: number;
  y: number;
  hovered?: boolean;
  setHovered?: (hovered: boolean) => void;
}