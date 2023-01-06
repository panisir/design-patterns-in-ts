import IColor from "./IColor";
import IShapeImplementer from "./IShapeImplementer";

export default class CircleImplementer implements IShapeImplementer {
  color: IColor;
  constructor(color: IColor) {
    this.color = color;
  }
  drawImplementation(): void {
    if (this.color) {
      console.log("Circle Shape painted ", this.color.paint());
    } else {
      console.log("Circle Shape");
    }
  }
}
