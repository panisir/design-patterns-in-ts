// -- Factory Client --

/* import ChairFactory from "./design-patterns/1_creational/1_factory/chair-factory";
const MediumChair = ChairFactory.getChair("MediumChair");
console.log("The Medium Chair Dimensions : ", MediumChair.getDimensions());
const SmallChair = ChairFactory.getChair("SmallChair");
console.log("The Small Chair Dimensions : ", SmallChair.getDimensions()); */

// -- Abstract Factory Client --

/* import FurnitureFactory from "./design-patterns/1_creational/2_abstract_factory/furniture-factory";
let FURNITURE = FurnitureFactory.getFurniture("SmallChair");
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDimensions());

FURNITURE = FurnitureFactory.getFurniture("MediumTable");
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDimensions());
 */

// -- Builder Client --
/* import IglooDirector from "./design-patterns/1_creational/3_builder/director/igloo-director";
import CastleDirector from "./design-patterns/1_creational/3_builder/director/castle-director";
import PoorDirector from "./design-patterns/1_creational/3_builder/director/poor-director";
import FenderStratLuthier from "./design-patterns/1_creational/3_builder/director/fender-strat-luthier";

const iglooHouse = IglooDirector.construct();
console.log(iglooHouse.construction());

const castle = CastleDirector.construct();
console.log(castle.construction());

const cottage = PoorDirector.construct();
console.log(cottage.construction());

const myStrat = FenderStratLuthier.construct();

console.log(myStrat.construction()); */

// -- Prototype Client --

/* import Document from "./design-patterns/1_creational/4_prototype/document";

const ORIGINAL_DOCUMENT = new Document("Original", [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
]);

console.log("The original document : ", ORIGINAL_DOCUMENT);
console.log("------------");

// This also modified ORIGINAL_DOCUMENT because of the shallow copy
// when using mode 1
const DOCUMENT_COPY_1 = ORIGINAL_DOCUMENT.clone(1);
DOCUMENT_COPY_1.name = "Copy 1";
DOCUMENT_COPY_1.array[1][2] = 200;
console.log("Document copy 1 : ", DOCUMENT_COPY_1);
console.log("The original document : ", ORIGINAL_DOCUMENT);
console.log("------------");

// This does NOT modify ORIGINAL_DOCUMENT because it changes the
// complete array[1] reference that was shallow copied when using mode
const DOCUMENT_COPY_2 = ORIGINAL_DOCUMENT.clone(1);
DOCUMENT_COPY_2.name = "Copy 2";
DOCUMENT_COPY_2.array[1] = [9, 10, 11, 12];
console.log("Document copy 2 : ", DOCUMENT_COPY_2);
console.log("The original document : ", ORIGINAL_DOCUMENT);
console.log("------------");

// This does modify ORIGINAL_DOCUMENT because it changes the element of
// array[1][0] that was deep copied recursively when using mode 2
const DOCUMENT_COPY_3 = ORIGINAL_DOCUMENT.clone(2); // deep copy
DOCUMENT_COPY_3.name = "Copy 3";
DOCUMENT_COPY_3.array[1][0] = 1234;
console.log("Document copy 3 : ", DOCUMENT_COPY_3);
console.log("The original document : ", ORIGINAL_DOCUMENT);
console.log("------------"); */

// -- Singleton Client --
/* import Game1 from "./design-patterns/1_creational/4_singleton/game1";
import Game2 from "./design-patterns/1_creational/4_singleton/game2";
import { Game3 } from "./design-patterns/1_creational/4_singleton/game3";

const GAME1 = new Game1();
GAME1.addWinner(2, "Cosmo");
GAME1.addWinner(3, "Sean");

const GAME2 = new Game2();
GAME2.addWinner(3, "Sean");

const GAME3 = new Game3();
GAME3.addWinner(1, "Emmy");

GAME1.leaderoard.print();
GAME2.leaderboard.print();
GAME3.leaderBoard.print(); */

// -- Singleton Client Fake DB--
/* import UserService from "./design-patterns/1_creational/4_singleton/user-service";
import GameService from "./design-patterns/1_creational/4_singleton/GameService";

const userService = new UserService("User", ["user", "roles"]);
const gameService = new GameService("Game", ["game", "chars"]);

userService.register();
gameService.register();

userService.dbInstance.getServices();
gameService.dbInstance.getModels();

userService.addModels();
userService.dbInstance.getModels();
 */

// -- Decorator Client --
/* import Value from "./design-patterns/2_structural/decorator/sbcode/value";
import Add from "./design-patterns/2_structural/decorator/sbcode/add";
import Sub from "./design-patterns/2_structural/decorator/sbcode/sub";

const A = Value(1);
const B = Value(2);
const C = Value(5);

console.log(Add(A, B).value);
console.log(Add(A, 100).value);
console.log(Sub(C, A).value);
console.log(Sub(Add(C, B), A).value);
console.log(Sub(100, 101).value);
console.log(Add(Sub(Add(C, B), A), 100).value);
console.log(Sub(123, Add(C, C)).value);
console.log(Add(Sub(Add(C, 10), A), 100).value);

console.log();

console.log(A.value);
console.log(B.value);
console.log(C.value); */

/* import EncryptionDecorator from "./design-patterns/2_structural/1_decorator/refactoring_guru/EncryptionDecorator";
import FileDataSource from "./design-patterns/2_structural/1_decorator/refactoring_guru/FileDataSource";
let data = 'melo-data';
let source = new FileDataSource('melo-file');
source.writeData(data);
let ec = new EncryptionDecorator(source);
ec.writeData(data);
console.log(ec.readData()); */

// -- Adapter Client --
/* import CubeA from "./design-patterns/2_structural/2_adapter/sbcode/CubeA";
import CubeBAdapter from "./design-patterns/2_structural/2_adapter/sbcode/CubeBAdapter";

const totalCubes = 5;
let counter = 0;

const manufactureCube = () => {
  const width = Math.floor(Math.random() * 10) + 1;
  const height = Math.floor(Math.random() * 10) + 1;
  const depth = Math.floor(Math.random() * 10) + 1;

  let cube = new CubeA();
  let success = cube.manifacture(width, height, depth);
  if (success) {
    counter = counter + 1;
  } else {
    console.log("Company A was busy, so trying company B");
    cube = new CubeBAdapter();
    success = cube.manifacture(width, height, depth);
    if (success) {
      counter = counter + 1;
    } else {
      console.log("Company B was busy, so trying company A");
    }
  }
};

const interval = setInterval(() => {
  manufactureCube();
  if (counter >= totalCubes) {
    clearInterval(interval);
    console.log(`${totalCubes} cubes have been manufactured`);
  }
}, 1000); */

// -- Facade Client 1 SB Code --
/* import GameAPI from "./design-patterns/2_structural/3_facade/sbcode/GameApi";
function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function facadeExample() {
  const gameApi = new GameAPI();
  const user = { user_name: "sean" };
  const userId = gameApi.registerUser(user);

  await sleep(500);

  gameApi.submitEntry(userId, 5);

  await sleep(500);

  console.log();
  console.log("---- GameState Snapshot ----");
  console.log(gameApi.gameState());

  await sleep(1000);

  const HISTORY = gameApi.getHistory();

  console.log();
  console.log("---- Reports History ----");
  Object.keys(HISTORY).forEach((key) => {
    console.log(`${key} : ${HISTORY[key][0]} : ${HISTORY[key][1]}`);
  });

  await sleep(1000);

  console.log();
  console.log("---- User Balance ----");
  console.log(user.user_name + " : " + gameApi.getBalance(userId));

  await sleep(1000);

  console.log();
  console.log("---- GameState Snapshot ----");
  console.log(gameApi.gameState());
}

facadeExample(); */

// -- Facade Client 2 Refactoring Guru --
/* import Facade from "./design-patterns/2_structural/3_facade/refactoring_guru/Facade";
import Subsystem1 from "./design-patterns/2_structural/3_facade/refactoring_guru/Subsystem1";
import Subsystem2 from "./design-patterns/2_structural/3_facade/refactoring_guru/Subsystem2";

function clientCode(facade: Facade) {
  console.log(facade.operation());
}

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1);

clientCode(facade); */

/* import CircleImplementer from "./design-patterns/2_structural/4_bridge/sbcode/CircleImplementer";
import SquareImplementer from "./design-patterns/2_structural/4_bridge/sbcode/SquareImplementer";
import Circle from "./design-patterns/2_structural/4_bridge/sbcode/Circle";
import Square from "./design-patterns/2_structural/4_bridge/sbcode/Square";

const circle = new Circle(new CircleImplementer());
circle.draw();

const square = new Square(new SquareImplementer());
square.draw(); */

/* import BlueColor from "./design-patterns/2_structural/4_bridge/refactoring_guru/BlueColor";
import BlueColorImplementer from "./design-patterns/2_structural/4_bridge/refactoring_guru/BlueColorImplementer";
import Circle from "./design-patterns/2_structural/4_bridge/refactoring_guru/Circle";
import CircleImplementer from "./design-patterns/2_structural/4_bridge/refactoring_guru/CircleImplementer";

const blueColor = new BlueColor(new BlueColorImplementer());
const circle = new Circle(new CircleImplementer(blueColor));
circle.draw(); */

/* import File from "./design-patterns/2_structural/5_composite/sbcode/File";
import Folder from "./design-patterns/2_structural/5_composite/sbcode/Folder";

const FileSystem = new Folder("root");
const FILE_1 = new File("abc.txt");
const FILE_2 = new File("123.txt");
FileSystem.attach(FILE_1);
FileSystem.attach(FILE_2);

const FOLDER_A = new Folder("folder_a");
FileSystem.attach(FOLDER_A);

const FILE_3 = new File("xyz.txt");
FOLDER_A.attach(FILE_3);

const FOLDER_B = new Folder("folder_b");
const FILE_4 = new File("456.txt");
FOLDER_B.attach(FILE_4);
FileSystem.attach(FOLDER_B);
FileSystem.dir("");

console.log();
FOLDER_B.attach(FOLDER_A);
FileSystem.dir(""); */

/* import Table from "./design-patterns/2_structural/6_flyweight/sbcode/Table";
import FlyweightFactory from "./design-patterns/2_structural/6_flyweight/sbcode/FlyweightFactory";

const table = new Table(3, 3);

table.rows[0].columns[0].data = "abra";
table.rows[0].columns[1].data = "112233";
table.rows[0].columns[2].data = "cadabra";
table.rows[1].columns[0].data = "racadab";
table.rows[1].columns[1].data = "12345";
table.rows[1].columns[2].data = "332211";
table.rows[2].columns[2].data = "aa 22 bb";
table.draw(); */
