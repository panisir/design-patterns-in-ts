interface Person {
    name: string;
    age: number;
  
    greet(phrase: string): void;
  }
  
  let user1: Person;
  user1 = {
    name: "Melih",
    age: 31,
    greet: (phrase: string) => {
      console.log(phrase + " " + user1.name);
    }, // !! The containing arrow function captures the global value of 'this'.
    // greet(phrase: string) {
    //   console.log(phrase + " " + this.name);
    // }
  };
  user1.greet("Hi there");
  
  interface Greetable {
    /**
     * to use this read only restriction
     * on instances which are initialized from classes
     * which implements this interface
     *
     * We need to define instance type as this interface
     * and after that we initialize with new constructor.
     *
     * For instance
     *
     * let var : Greetable;
     * var = new Personalite();
     */
    readonly name: string;
    age: number;
    greet(phrase: string): void;
  }
  
  class Personalite implements Greetable {
    name: string = "";
    age: number;
    greet(phrase: string): void {
      console.log(phrase);
    }
  
    constructor(age: number) {
      this.age = age;
    }
  }
  
  // let personalite : Greetable;
  const personalite = new Personalite(31);
  personalite.name = "Melih";
  console.log(personalite);
  
  abstract class Persona implements Greetable {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    kiss() {
      console.log(this.name + " kissed you");
    }
  
    abstract hug(): void;
  
    abstract greet(phrase: string): void;
  }
  
  class WarmPerson extends Persona {
    constructor(name: string, age: number) {
      super(name, age);
    }
  
    hug(): void {
      console.log(this.name + " gives a hug to you");
    }
    greet(): void {
      console.log(this.name + " greets you");
    }
  }
  
  const persona = new WarmPerson("Melih", 31);
  persona.greet();
  persona.hug();
  persona.kiss();
  
  // -- INTERFACES AS FUNCTIONS --
  // define function description with type
  type addFn0 = (a: number, b: number) => number;
  // OR with interface
  interface addFn {
    (a: number, b: number): number;
  }
  
  let addy: addFn;
  
  addy = (n1: number, n2: number) => {
    return n1 + n2;
  };
  