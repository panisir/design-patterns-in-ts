import House from "../product/house";
import HouseBuilder from "../builder/house-builder";

export default class PoorDirector{
    static construct(): House {
        return new HouseBuilder()
        .setBuildingType('cottage')
        .setWallMaterial('mud')
        .setNumberDoors(1)
        .setNumberWindows(1)
        .getResult();
    }
}