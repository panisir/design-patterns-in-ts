import House from "../product/house";
import HouseBuilder from "../builder/house-builder";

export default class CastleDirector {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType("Castle")
      .setWallMaterial("Stone")
      .setNumberDoors(5)
      .setNumberWindows(25)
      .getResult();
  }
}
