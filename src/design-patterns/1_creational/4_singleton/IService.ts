import FakeDBInstance from "./fake-db-instance";

export default interface IService {
    dbInstance : FakeDBInstance;
    name: string;
    models: string[];
    addModels(): void;
    register(name: string): void;
}