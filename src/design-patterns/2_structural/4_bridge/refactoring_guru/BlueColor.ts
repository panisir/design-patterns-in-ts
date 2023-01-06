import IColor from "./IColor";
import IColorImplementer from "./IColorImplementer";

export default class BlueColor implements IColor {
  private implementer: IColorImplementer;

  constructor(implementer: IColorImplementer) {
    this.implementer = implementer;
  }

  paint(): string {
    return this.implementer.paintImplementation();
  }
}
