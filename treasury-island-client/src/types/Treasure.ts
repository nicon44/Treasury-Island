export interface ITreasure {
  id: number;
  xSize: number;
  ySize: number;
}

export interface IBuriedTreasure extends ITreasure {
    x: number;
    y: number;
}
