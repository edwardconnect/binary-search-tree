import { Bst } from "./bst";

export class BstNode<T> {
    public id!: string | number;
    public data!: T;
    public left = new Bst<T>();
    public right = new Bst<T>();

    constructor(id: string | number, data: T) {
        this.id = id;
        this.data = data;
    }
}