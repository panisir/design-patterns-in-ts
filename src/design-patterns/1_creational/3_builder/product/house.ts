export default class House {
  doors: number = 0;
  windows: number = 0;
  wallMetarial: string = "";
  buildingType: string = "";

  construction(): string {
    return `This is a ${this.wallMetarial} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`;
  }
}