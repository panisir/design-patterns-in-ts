import SmallChair from "./small-chair";
import MediumChair from "./medium-chair";
import { IChair } from "./chair";

export default class ChairFactory {
  static getChair(chair: string): IChair {
    if (chair === "SmallChair") {
      return new SmallChair();
    } else {
      return new MediumChair();
    }
  }
}
