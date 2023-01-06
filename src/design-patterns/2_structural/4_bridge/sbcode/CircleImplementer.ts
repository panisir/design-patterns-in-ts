import IShapeImplementor from "./IShapeImplementor";

export default class CircleImplementer implements IShapeImplementor {
  drawImplementation(): void {
    console.log("    ******");
    console.log("  **      **");
    console.log(" *          *");
    console.log("*            *");
    console.log("*            *");
    console.log(" *          *");
    console.log("  **      **");
    console.log("    ******");
  }
}
