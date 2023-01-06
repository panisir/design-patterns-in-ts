import IColorImplementer from "./IColorImplementer";

export default class BlueColorImplementer implements IColorImplementer {

  paintImplementation(): string {
    return "Blue";
  }
}
