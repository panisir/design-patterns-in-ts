import IShape from "../sbcode/IShape";
import IShapeImplementer from "./IShapeImplementer";

export default class Square implements IShape {
  private implementer: IShapeImplementer;
  constructor(implementer: IShapeImplementer) {
    this.implementer = implementer;
  }

  draw(): void {
    this.implementer.drawImplementation();
  }
}
