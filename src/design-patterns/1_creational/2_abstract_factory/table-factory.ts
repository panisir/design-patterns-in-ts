import SmallTable from "./small-table";
import MediumTable from "./medium-table";
import { ITable } from "./table";

export default class TableFactory {
  static getTable(table: string): ITable {
    if (table === "MediumTable") {
      return new MediumTable();
    } else if (table === "SmallTable") {
      return new SmallTable();
    } else {
      throw new Error("No Table Found");
    }
  }
}
