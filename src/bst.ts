import { BstNode } from "./bst-node";

export class Bst<T> {
    private root: BstNode<T> | null;

    constructor() { 
        this.root = null;
    }

    public isEmpty(): boolean {
        return this.root === null || this.root === undefined;
    }

    public isContains(id: string | number): boolean {
        if (this.isEmpty()) {
            return false;
        }

        if (this.root!.id === id) {
            return true;
        } else if (id < this.root!.id!) {
            return this.root!.left.isContains(id);
        } else {
            return this.root!.right.isContains(id);
        }
    }

    public getMaxId(): number | string | null {
        return this.getMaxBstNode()!.id;
    }
    
    public getMinId(): number | string | null {
        return this.getMinBstNode()!.id;
    }

    public getMinData(): T {
        return this.getMinBstNode()!.data;
    }

    public getMaxData(): T {
        return this.getMaxBstNode()!.data;
    }

    public searchDataById(id: number | string): T | null {
        if (this.isEmpty()) {
            return null;
        }

        let node = this.root!;

        while (id !== node.id) {
            if (!node!.left.isEmpty() && id < node.id) {
                node = node.left.root!;
            } else if (!node!.right.isEmpty() && id > node.id) {
                node = node.right.root!;
            } else {
                return null;
            }
        }

        return node.data;
    }

    public print(depth: number = 0) {
        if (this.isEmpty()) {
            return;
        }

        this.root!.right.print(depth + 1);

        let tabCount = 0;
        for (let index = 0; index < depth; ++index) {
            tabCount++;
        }
        console.log(Array (tabCount + 1).join('\t') + this.root!.id);

        this.root!.left.print(depth + 1);
    }

    public insert(id: string | number, data: T) {
        if (this.isEmpty()) {
            this.root = new BstNode<T>(id, data);
        } else if (id < this.root!.id) {
            this.root!.left.insert(id, data);
        } else if (id > this.root!.id) {
            this.root!.right.insert(id, data);
        }
    }

    public remove(id: string | number) {
        if (this.isEmpty()) {
            return;
        }

        if (id < this.root!.id) {
            this.root!.left.remove(id);
        } else if (id > this.root!.id) {
            this.root!.right.remove(id);
        } else if (this.root!.left.root && this.root!.right.root) {
            this.root!.id = this!.root!.right.getMinId()!;
            this.root!.right.remove(this.root!.id);
        } else {
            const deletingNode = this.root!;
            this.root = (this.root!.left.isEmpty()) ? this.root!.right.root : this.root!.left.root;
            deletingNode.left.root = deletingNode.right.root = null;
        }
    }

    private getMaxBstNode(): BstNode<T> | null {
        if (this.isEmpty()) {
            return null;
        }

        let node = this.root!;

        while (!node!.right.isEmpty()) {
            node = node.right.root!;
        }

        return node;
    }

    private getMinBstNode(): BstNode<T> | null {
        if (this.isEmpty()) {
            return null;
        }

        let node = this.root!;

        while (!this.isEmpty() && !node!.left.isEmpty()) {
            node = node.left.root!;
        }

        return node;
    }

}
