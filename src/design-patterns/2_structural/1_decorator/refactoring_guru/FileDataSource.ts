import IDataSource from "./IDataSource";

export default class FileDataSource implements IDataSource {
  data: string;
  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.data = "";
  }

  writeData(data: string): void {
    console.log(
      "The data : " + data + " has been written to file successfully"
    );
    this.data = data;
  }

  readData(): string {
    return this.data;
  }
}
