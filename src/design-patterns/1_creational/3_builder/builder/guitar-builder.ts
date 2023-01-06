import Guitar from "../product/guitar";

interface IGuitarBuilder {
  guitar: Guitar;
  setBrand(brand: string): this;
  setType(type: string): this;
  setBodyWood(wood: string): this;
  setFretBoardWood(wood: string): this;
  setFretNumber(number: number): this;
  setPickupNumber(number: number): this;
  setPickupType(type: string): this;
  getGuitar(): Guitar;
}

export default class GuitarBuilder implements IGuitarBuilder {
  guitar: Guitar;

  constructor() {
    this.guitar = new Guitar();
  }

  setBrand(brand: string): this {
    this.guitar.brand = brand;
    return this;
  }
  setType(type: string): this {
    this.guitar.guitarType = type;
    return this;
  }
  setBodyWood(wood: string): this {
    this.guitar.bodyWood = wood;
    return this;
  }
  setFretBoardWood(wood: string): this {
    this.guitar.fretBoardWood = wood;
    return this;
  }
  setFretNumber(number: number): this {
    this.guitar.fretNumber = number;
    return this;
  }
  setPickupNumber(number: number): this {
    this.guitar.pickupNumber = number;
    return this;
  }
  setPickupType(type: string): this {
    this.guitar.pickupType = type;
    return this;
  }
  getGuitar(): Guitar {
    return this.guitar;
  }
}
