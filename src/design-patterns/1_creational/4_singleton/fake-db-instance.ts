export default class FakeDBInstance {
  static instance: FakeDBInstance;

  private _db_models: string[] = [];
  private _services: string[] = [];

  constructor() {
    if (FakeDBInstance.instance) {
      return FakeDBInstance.instance;
    }
    FakeDBInstance.instance = this;
  }

  public createConnection(service: string) {
    this._services.push(service);
  }

  public addModel(model: string) {
    this._db_models.push(model);
  }

  public getServices(): void {
    if (this._services.length === 0) {
      console.log("No service has been registered to pool yet...");
    }
    console.log("Loading Registered Services...");
    this._services.forEach((service) => {
      console.log(service + " : has been registered.");
    });
  }

  public getModels(): void {
    if (this._db_models.length === 0) {
      console.log("No model has been added to pool yet...");
    }
    console.log("Loading Added Models...");
    this._db_models.forEach((model) => {
      console.log("The model : " + model + " has been added");
    });
  }
}
