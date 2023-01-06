import { dimension } from './dimension'

export interface IChair {
  name: string;
  height: number;
  width: number;
  depth: number;
  getDimensions(): dimension;
}

export class Chair implements IChair {
  name: string = '';
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
