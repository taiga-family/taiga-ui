import { Node } from 'typescript';
import { TSQueryOptions, TSQueryProperties } from './tsquery-types';
export declare function traverseChildren(node: Node, iterator: (childNode: Node, ancestors: Array<Node>) => void, options: TSQueryOptions): void;
export declare function getVisitorKeys(node: Node | null): Array<string>;
export declare function getProperties(node: Node): TSQueryProperties;
