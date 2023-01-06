import { Table } from "./table";

export default class MediumTable extends Table {
  constructor() {
    super();
    this.name = "MediumTable";
    this.height = 70;
    this.width = 70;
    this.depth = 70;
  }
}
