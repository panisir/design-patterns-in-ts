import Folder from "./Folder";

export default interface IComponent {
  referenceToParent?: Folder;

  dir(indent: string): void;
  detach(): void;
}