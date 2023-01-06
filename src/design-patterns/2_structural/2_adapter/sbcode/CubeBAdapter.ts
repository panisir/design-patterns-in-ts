import { ICubeA } from "./CubeA";
import CubeB from "./CubeB";

export default class CubeBAdapter implements ICubeA {
  #cubeB: CubeB;

  constructor() {
    this.#cubeB = new CubeB();
  }

  manifacture(width: number, height: number, depth: number): boolean {
    const success = this.#cubeB.create(
      [0 - width / 2, 0 - height / 2, 0 - depth / 2],
      [0 + width / 2, 0 + height / 2, 0 + depth / 2]
    );
    return success;
  }
}
