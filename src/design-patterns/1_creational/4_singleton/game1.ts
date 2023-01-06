import IGame from "./igame";
import Leaderboard from "./Leaderboard";

export default class Game1 implements IGame {
  leaderoard: Leaderboard;

  constructor() {
    this.leaderoard = new Leaderboard();
  }

  addWinner(position: number, name: string): void {
    this.leaderoard.addWinner(position, name);
  }
}
