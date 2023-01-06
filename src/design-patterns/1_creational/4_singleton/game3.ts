import Leaderboard from "./Leaderboard";
import IGame from "./igame";

export class Game3 implements IGame {

    leaderBoard: Leaderboard;

    constructor(){
        this.leaderBoard = new Leaderboard();
    }

    addWinner(position: number, name: string): void {
        this.leaderBoard.addWinner(position, name);
    }

}