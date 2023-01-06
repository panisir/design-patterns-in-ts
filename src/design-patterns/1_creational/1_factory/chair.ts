import { dimension } from "./dimension";

interface IChair {
  height: number;
  width: number;
  depth: number;
  getDimensions(): dimension;
}

export default class Chair implements IChair {
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
