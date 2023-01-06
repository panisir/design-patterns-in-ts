import IService from "./IService";
import FakeDBInstance from "./fake-db-instance";

export default class UserService implements IService {
  name: string;
  models: string[];
  dbInstance: FakeDBInstance;
  constructor(name: string, models: string[]) {
    this.name = name;
    this.models = models;
    this.dbInstance = new FakeDBInstance();
  }
  
  register(): void {
    this.dbInstance.createConnection(this.name);
  }

  addModels(): void {
    this.models.forEach((model) => {
      this.dbInstance.addModel(model);
    });
  }
}
