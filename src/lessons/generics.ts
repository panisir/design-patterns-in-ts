// -- What are Generics --

const names: Array<string> = []; // string[]
// names[0].split

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("this is done");
  }, 2000);
});

promise.then((data) => {
  data.split("");
});

// -- Creating Generic Functions --

/**
 * In situations like below we get property does not exist in the object error
 * And we can use generics to solve that problem
 */

// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB);
// }
//
// console.log(merge({name: 'Melih'}, {age: 31}));
//
// const mergedObj = merge({name: 'Melih'}, {age: 31});
// mergedObj.name; // it gives error

/**
 * By following the way below
 * we can ensure the function two different types of object
 * and might return an intersection of them
 *
 */

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "Melih" }, { age: 31 }));

const mergedObj = merge({ name: "Melih" }, { age: 31 });
console.log(mergedObj.name);

// -- TYPE CONSTRAINTS --
/**
 * If we give just a number as a second parameter to
 * merge function, js silently works but it does not add
 * though for ex: merge({name: 'Melih'}, 30)
 *
 * To solve that we use type constratins by following
 * the way below
 *
 * By extending object on T and U we say yes we wanna add
 * something generic but they must be object for sure.
 *
 * <T extends object, U extends object>
 * <T extends Person, U extends Person>
 * <T extends string | number, U extends number | boolean>
 */

function mergy<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const mergedObj2 = mergy({ name: "Melih" }, { age: 30 });
console.log(mergedObj2.name);

// -- ANOTHER GENERIC FUNCTION --

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hello There"));
console.log(countAndDescribe(["melo", "hello", "there"]));
// console.log(countAndDescribe(10); // it gives error since number has no length property

// -- THE "keyof" CONSTRAINT --

/**
 * The U type extends keyof T and it says
 * it's one of the keys of T object.
 *
 * so we can ensure that it's a type of key of T object
 */

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

// -- GENERIC CLASSES --
class DataStorage<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Melih");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);
console.log(numberStorage.getItems());

const objStorage = new DataStorage<object>();
objStorage.addItem({ name: "Melih" });
objStorage.addItem({ name: "Max" });

/**
 * if we remove the object with name 'Melih' and
 * log the result to console we see that it's still there
 * it's because objects are referened types unlike primitives.
 *
 * So indexOf feature does not work like primitives on objects or arrays
 * because we give a brand new object in memory to function here and it
 * has a different address.
 *
 * If the js does not find the address it returns -1
 * and removes the last element in the array
 *
 * To work around this, we can assign the object to a constant
 * const obj = {name: 'Melih'}
 * objStorage.removeItem(obj);
 *
 * OR
 *
 * In the DataStorage class T might extends string | number | boolean
 * to make sure we do not store object types.
 */
objStorage.removeItem({ name: "Melih" });

console.log(objStorage);

// -- GENERIC UTILITY TYPES --

// GENERIC UTILITY TYPES / PARTIAL TYPE
/**
 *
 * The Partial type below makes
 * all the properties of given object
 * optional.
 * in this case it is CourseGoal
 * and its properties will become optional
 * thanks to Partial type.
 *
 * And in the end we will do type casting
 * from Partial type to actual type we need.
 *
 * courseGoal as CourseGoal;
 */

// function createCourseGoal(
//   title: string,
//   description: string,
//   date: Date
// ): CourseGoal {
//   return { title: title, description: description, completeUntil: date };
// }

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// GENERIC UTILITY TYPES / READONLY TYPE

// const namess = ["Melih", "Max"];
// names.push("Anna");

const namess: Readonly<string[]> = ["Melih", "Max", "Halo"];
/**
 * It's weird 'cause it complies to plain js file.
 * But again it does not push new elements in to array.
 * At least the ide should give an syntax error
*/
names.push("Anna");
names.push("Melo");
console.log(namess);

interface User{
    name: string;
}

const user : User = {
    name : 'Melih'
}

function extractData<string>(user: User, id: string): string {
    return user.name + id;
}

const data = extractData<string>(user, 'userId');