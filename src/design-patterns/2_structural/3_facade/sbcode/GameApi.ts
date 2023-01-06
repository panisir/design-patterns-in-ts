import Reports from "./Reports";
import Wallets from "./wallets";
import Users from "./Users";
import GameEngine, { GameState } from "./GameEngine";

export interface IGameAPI {
  getBalance(userId: string): number;
  gameState(): GameState;
  getHistory(): { [id: string]: [number, string] };
  changePwd(userId: string, password: string): boolean;
  submitEntry(userId: string, entry: number): boolean;
  registerUser(value: { [id: string]: string }): string;
}

export default class GameAPI implements IGameAPI {
  #wallets: Wallets;
  #reports: Reports;
  #users: Users;
  #gameEngine: GameEngine;

  constructor() {
    this.#wallets = new Wallets();
    this.#reports = new Reports();
    this.#users = new Users();
    this.#gameEngine = new GameEngine();
  }

  getBalance(userId: string): number {
    return this.#wallets.getBalance(userId);
  }
  gameState(): GameState {
    return this.#gameEngine.getGameState();
  }
  getHistory(): { [id: string]: [number, string] } {
    return this.#reports.getHistory();
  }
  changePwd(userId: string, password: string): boolean {
    return this.#users.changePwd(userId, password);
  }
  submitEntry(userId: string, entry: number): boolean {
    return this.#gameEngine.submitEntry(userId, entry);
  }
  registerUser(value: { [id: string]: string }): string {
    return this.#users.registerUser(value);
  }
}
