import DataSourceDecorator from "./DataSourceDecorator";
import IDataSource from "./IDataSource";

export default class EncryptionDecorator extends DataSourceDecorator {
  constructor(source: IDataSource) {
    super(source);
  }

  writeData(data: string): void {
    console.log('The data has been encrypted successfully');
    const encryptedData = data + "@encrypted";
    this.wrappee.writeData(encryptedData);
  }

  readData(): string {
    console.log('The data has been decrypted successfully');
    let data = this.wrappee.readData();
    data = data + "@decrypted";
    return data;
  }
}
