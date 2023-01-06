import IShape from "./IShape";
import IShapeImplementer from "./IShapeImplementer";

export default class Circle implements IShape {
  private implementer: IShapeImplementer;

  constructor(implementer: IShapeImplementer) {
    this.implementer = implementer;
  }

  draw(): void {
    this.implementer.drawImplementation();
  }
}
