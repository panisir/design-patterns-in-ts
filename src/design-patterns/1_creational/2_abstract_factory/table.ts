import { dimension } from "../1_factory/dimension";

export interface ITable {
  name: string;
  height: number;
  width: number;
  depth: number;
  getDimensions(): dimension;
}

export class Table implements ITable {
  name: string = "";
  height: number = 0;
  width: number = 0;
  depth: number = 0;
  getDimensions(): dimension {
    return {
      width: this.width,
      depth: this.depth,
      height: this.height,
    };
  }
}
