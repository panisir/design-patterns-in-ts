import IShape from "./IShape";
import IShapeImplementor from "./IShapeImplementor";

export default class Circle implements IShape {
  #implementer: IShapeImplementor;

  constructor(implementer: IShapeImplementor) {
    this.#implementer = implementer;
  }

  draw(): void {
    this.#implementer.drawImplementation();
  }
}
