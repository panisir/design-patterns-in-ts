export default class Guitar {
  brand: string;
  guitarType: string;
  pickupNumber: number;
  pickupType: string;
  fretNumber: number;
  fretBoardWood: string;
  bodyWood: string;

  construction() {
    return `This is a ${this.brand} ${this.guitarType} 
        with ${this.fretBoardWood} keyboard and ${this.bodyWood} body 
        and it has ${this.fretNumber} frets also its pickups are ${this.pickupType}`;
  }
}
