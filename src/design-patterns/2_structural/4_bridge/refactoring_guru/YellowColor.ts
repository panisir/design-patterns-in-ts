import IColor from "./IColor";
import IColorImplementer from "./IColorImplementer";

export default class YellowColor implements IColor {
  private implementer: IColorImplementer;

  constructor(implementer: IColorImplementer) {
    this.implementer = implementer;
  }

  paint(): void {
    this.implementer.paintImplementation();
  }
}
