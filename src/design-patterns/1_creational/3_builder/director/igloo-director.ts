import House from "../product/house";
import HouseBuilder from "../builder/house-builder";

export default class IglooDirector {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType("Igloo")
      .setWallMaterial("Ice")
      .setNumberDoors(1)
      .getResult();
  }
}
