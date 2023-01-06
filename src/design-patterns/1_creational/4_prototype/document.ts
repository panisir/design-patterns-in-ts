import Iprototype from "./iprototype";

export default class Document implements Iprototype {
  name: string;
  array: [number[], number[]];

  constructor(name: string, array: [number[], number[]]) {
    this.name = name;
    this.array = array;
  }

  clone(mode: number): Document {
    let array;
    if (mode === 2) {
      // deep copy
      array = JSON.parse(JSON.stringify(this.array));
    } else {
      // shallow copy
      array = Object.assign([], this.array);
    }
    return new Document(this.name, array);
  }
}
