import Guitar from "../product/guitar";
import GuitarBuilder from "../builder/guitar-builder";

export default class FenderStratLuthier {
  static construct(): Guitar {
    return new GuitarBuilder()
      .setBrand("FENDER")
      .setType("StratoCaster")
      .setBodyWood("Alder")
      .setFretBoardWood("Mapple")
      .setFretNumber(22)
      .setPickupType("Fender Vintage 88 Single")
      .getGuitar();
  }
}
