import Document from "./document";

export default interface Iprototype {
  clone(mode: number): Document;
}
