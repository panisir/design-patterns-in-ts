import IColor from "./IColor";
import IShapeImplementer from "./IShapeImplementer";

export default class SquareIplementer implements IShapeImplementer {
  color: IColor;

  constructor(color: IColor) {
    this.color = color;
  }

  drawImplementation(): void {
    if (this.color) {
      console.log("Square Shape drawed and painted " + this.color.paint());
    } else {
      console.log("Circle Shape drawed");
    }
  }
}
