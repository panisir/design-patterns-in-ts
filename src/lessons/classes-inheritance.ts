class Department {
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
  
    describe(this: Department) {
      console.log(`The Departmen with the id (${this.id}) : ${this.name}`);
    }
  
    addEmployee(employee: string): void {
      this.employees.push(employee);
    }
  
    getEmployeeByIndex(index: number): string {
      return this.employees[index];
    }
  }
  
  const accounting = new Department("id1", "Accounting");
  console.log(accounting);
  accounting.describe();
  accounting.addEmployee("Melih");
  
  // const accountingCopy = { name: 'copy', describe: accounting.describe };
  // console.log(accountingCopy);
  
  // accountingCopy.describe();
  
  // ---- Inheritance ---
  class ITDepartment extends Department {
    /**
     * we can inherit super class' constructor and properties and methods
     *   in addition we can add our own properties in our sub class
     *  like admins example here
     */
    constructor(private admins: string[] = []) {
      super("id2", "IT");
    }
  
    setAdmin(employeeIndex: number): void {
      this.admins.push(this.getEmployeeByIndex(employeeIndex));
    }
  }
  
  class AccountingDepartment extends Department {
    private lastReport: string;
  
    // -- Getters And Setters Section Begins
    /**
     * we can define getters and setters
     * on some specific fields and use them
     * as attribute not needing invoke
     * a function call for ex
     * const report = accountingDepartment.mostRecentReport;
     * !! NOT accountingDepartment.mostRecentReport(); !!
     *
     */
    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error("No Report found.");
    }
  
    set mostRecentReport(value: string) {
      this.addReport(value);
    }
  
    // -- Getters And Setters Section Ends
  
    constructor(id: string, private reports: string[]) {
      super(id, "Accounting");
      this.lastReport = reports[0];
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
  
    /**
     * We can override super class' methods
     * with subclass' own way.
     *
     */
    describe() {
      console.log("Accounting Department - ID: " + this.id);
    }
  }
  
  const itDepartment = new ITDepartment();
  itDepartment.addEmployee("Mehmet");
  itDepartment.addEmployee("Melih");
  itDepartment.setAdmin(1);
  itDepartment.describe();
  // console.log(itDepartment);
  
  const accountingDepartment = new AccountingDepartment("id3", []);
  accountingDepartment.addReport("Something went wrong...");
  accountingDepartment.mostRecentReport = "Something went wrong again";
  console.log(accountingDepartment);
  console.log(accountingDepartment.mostRecentReport);
  
  // create employee from static method of Department class
  
  const employee1 = Department.createEmployee("Max");
  console.log(employee1);
  
  accountingDepartment.addEmployee(employee1.name);
  
  console.log(accountingDepartment);
  console.log(accountingDepartment.describe());
  