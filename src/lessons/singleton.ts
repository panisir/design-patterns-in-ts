abstract class Departmenttt {
    // private readOnly id: string;
    // private name: string;
    protected employees: string[] = [];
  
    /**
     * Important NOTE !
     * we can access static members only from
     * static methods
     * Because the idea behind making things static
     * to detach them from instances.
     *
     * So we can not access from constructor as well.
     *
     */
    static fiscalYear: number = 2020;
  
    constructor(protected readonly id: string, public name: string) {
      //
    }
  
    /**
     * We can define STATIC METHODS
     * and use them without initializing
     * class with new.
     *
     * This type of methods can bu used as
     * utility methods.
     *
     * We can see that type of methods in libs
     * like Math.
     *
     */
    static createEmployee(name: string) {
      return { name: name };
    }
  
    abstract describe(this: Department): void;
  
    addEmployee(employee: string): void {
      this.employees.push(employee);
    }
  
    getEmployeeByIndex(index: number): string {
      return this.employees[index];
    }
  }
  
  class AccountingDepartmentSingleton extends Departmenttt {
    private lastReport: string;

    /**
     * We define a static and private property 
     * of it's own kind.
     */
    private static instance: AccountingDepartmentSingleton;
  
    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error("No Report found.");
    }
  
    set mostRecentReport(value: string) {
      this.addReport(value);
    }
  
    /** 
     * Singleton's constructor should be private
    */
    private constructor(id: string, private reports: string[]) {
      super(id, "Accounting");
      this.lastReport = reports[0];
    }
  
    /** 
     * We must have a static methods that returns
     * an object of its own kind.
     * 
     * We use it to get the instance.
    */
    static getInstance(): AccountingDepartmentSingleton {
      if (AccountingDepartmentSingleton.instance /*this.instance*/) {
        return this.instance;
      }
      this.instance = new AccountingDepartmentSingleton("d2-singleton", []);
      return this.instance;
    }
  
    addEmployee(name: string): void {
      if (name === "Max") {
        return;
      }
      this.employees.push(name);
    }
  
    addReport(text: string) {
      this.reports.push(text);
      this.lastReport = text;
    }
  
    describe() {
      console.log("Accounting Department - ID: " + this.id);
    }
  }
  
  const accountingDepartmentSingle = AccountingDepartmentSingleton.getInstance();
  
  console.log(accountingDepartmentSingle);