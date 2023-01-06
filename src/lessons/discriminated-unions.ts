// -- INTERSECTION TYPES ---

type Admin = {
    name: string;
    privileges: string[];
  };
  
  type Employee = {
    name: string;
    startDate: Date;
  };
  
  type ElevatedEmployee = Admin & Employee;
  
  const e1: ElevatedEmployee = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
  };
  
  type Combinable = string | number;
  type Numeric = number | boolean;
  
  type Universal = Combinable & Numeric;
  
  // console.log(e1);ü
  
  // More on TYPE GUARDS
  
  function add(a: Combinable, b: Combinable) {
    /**
     * this is the classic type check and guard
     * but we have one more type guarding ways in ts.
     */
    if (typeof a === "string" || typeof b === "string") {
      return a.toString() + b.toString();
    }
    return a + b;
  }
  
  type UnknownEmployee = Employee | Admin;
  
  function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
      console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
      console.log("Start Date: " + emp.startDate);
    }
  }
  
  printEmployeeInformation(e1);
  
  class Car {
    drive() {
      console.log("Driving...");
    }
  }
  
  class Truck {
    drive() {
      console.log("Driving a truck...");
    }
  
    loadCargo(amount: number) {
      console.log("Loading cargo ..." + amount);
    }
  }
  
  type Vehicle = Car | Truck;
  
  const v1 = new Car();
  const v2 = new Truck();
  
  function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if ("loadCargo" in vehicle) {
      vehicle.loadCargo(1000);
    }
  }
  
  useVehicle(v1);
  useVehicle(v2);
  
  // -- DISCRIMINATED UNIONS --
  
  interface Bird {
    type: "bird";
    flyingSpeed: number;
  }
  
  interface Horse {
    type: "horse";
    runningSpeed: number;
  }
  
  type Animal = Bird | Horse;
  
  function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
      case "bird":
        speed = animal.flyingSpeed;
        break;
      case "horse":
        speed = animal.runningSpeed;
    }
    console.log("Moving at speed: " + speed);
  }
  
  moveAnimal({ type: "bird", flyingSpeed: 10 });
  
  
  // --  --- 
  
  
  