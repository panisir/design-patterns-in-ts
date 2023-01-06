import Folder from "./Folder";
import IComponent from "./IComponent";

export default class File implements IComponent {
  name: string;
  referenceToParent?: Folder;

  constructor(name: string) {
    this.name = name;
  }

  dir(indent: string): void {
    console.log(`${indent}<FILE> ${this.name}`);
  }
  
  detach(): void {
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
    }
  }
}
