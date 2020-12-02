import { Node } from './node';
export declare function and(...criteria: ((node: Node) => boolean)[]): (node: Node) => boolean;
export declare function by(criteria: (node: Node) => boolean): {
    (node: Node): boolean;
    and: (criteria: (node: Node) => boolean) => (node: Node) => boolean;
};
export declare function isInProgress(node: Node): boolean;
export declare function isPending(node: Node): boolean;
export declare function isDirty(node: Node): boolean;
export declare function isDone(node: Node): boolean;
