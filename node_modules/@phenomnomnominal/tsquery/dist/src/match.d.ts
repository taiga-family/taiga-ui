import { Node } from 'typescript';
import { TSQueryOptions, TSQuerySelectorNode } from './tsquery-types';
export declare function match<T extends Node = Node>(node: Node, selector: TSQuerySelectorNode, options?: TSQueryOptions): Array<T>;
export declare function findMatches(node: Node, selector: TSQuerySelectorNode, ancestry?: Array<Node>, options?: TSQueryOptions): boolean;
