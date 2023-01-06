import IDataSource from "./IDataSource";

export default class DataSourceDecorator implements IDataSource {
  protected wrappee: IDataSource;

  constructor(source: IDataSource) {
    this.wrappee = source;
  }

  writeData(data: string): void {
    this.wrappee.writeData(data);
  }

  readData(): string {
    return this.wrappee.readData();
  }
}
