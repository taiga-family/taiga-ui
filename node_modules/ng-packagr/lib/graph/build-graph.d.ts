import { Node } from './node';
export interface Traversable<T> {
    filter(by: (value: T, index: number) => boolean): T[];
    find(by: (value: T, index: number) => boolean): T | undefined;
    some(by: (value: T, index: number) => boolean): boolean;
}
/**
 * A tree of source files. Eventually, it's a graph. Ideally, it's an acyclic directed graph.
 * Technically, it's implemented as a map-like collection with references between map entries.
 */
export declare class BuildGraph implements Traversable<Node> {
    private store;
    put(value: Node | Node[]): this;
    private insert;
    get(url: string): Node;
    has(url: string): boolean;
    entries(): Node[];
    some(by: (value: Node, index: number) => boolean): boolean;
    filter(by: (value: Node, index: number) => boolean): Node[];
    find(by: (value: Node, index: number) => boolean): Node | undefined;
    from(node: Node): Traversable<Node>;
    get size(): number;
}
