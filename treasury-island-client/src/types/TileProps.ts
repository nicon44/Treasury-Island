export interface TileProps {
  x: number;
  y: number;
  hovered?: boolean;
  setHovered?: (hovered: boolean) => void;
}

export interface SandProps extends TileProps {
  combined?: boolean;
  hit?: boolean;
  miss?: boolean;
}