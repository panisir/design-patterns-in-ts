import IShapeImplementor from "./IShapeImplementor";

export default class SquareImplementer implements IShapeImplementor {
  drawImplementation(): void {
    console.log("**************");
    console.log("*            *");
    console.log("*            *");
    console.log("*            *");
    console.log("*            *");
    console.log("*            *");
    console.log("*            *");
    console.log("**************");
  }
}
