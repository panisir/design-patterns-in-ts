import IColor from "./IColor";

export default interface IShapeImplementer {
    color: IColor;
    drawImplementation(): void;
}