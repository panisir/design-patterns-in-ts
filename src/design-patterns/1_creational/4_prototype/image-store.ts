export default class ImageStore {
    type: string;
    size: number;

    constructor(type: string, size: number){
        this.type = type;
        this.size = size;
    }
}